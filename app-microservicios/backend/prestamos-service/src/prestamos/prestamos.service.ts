import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Prestamo } from './entities/prestamo.entity';

@Injectable()
export class PrestamosService {
  // URLs de los otros microservicios
  private readonly USUARIOS_URL = 'http://localhost:3001/usuarios';
  private readonly LIBROS_URL = 'http://localhost:3002/libros';

  constructor(
    @InjectRepository(Prestamo)
    private prestamoRepo: Repository<Prestamo>,
    private httpService: HttpService,
  ) {}

  async crear(datos: Partial<Prestamo>): Promise<Prestamo> {
    const { usuarioId, libroId } = datos;

    // 1. Validar que el usuario exista
    try {
      await firstValueFrom(
        this.httpService.get(`${this.USUARIOS_URL}/${usuarioId}`)
      );
    } catch (error) {
      throw new NotFoundException(`Usuario con ID ${usuarioId} no existe`);
    }

    // 2. Validar que el libro exista y esté disponible
    let libro: any;
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.LIBROS_URL}/${libroId}`)
      );
      libro = response.data;
    } catch (error) {
      throw new NotFoundException(`Libro con ID ${libroId} no existe`);
    }

    if (!libro.disponible) {
      throw new BadRequestException(`El libro "${libro.titulo}" no está disponible`);
    }

    // 3. Crear el préstamo
    const nuevo = this.prestamoRepo.create({
      ...datos,
      estado: 'activo',
    });
    const prestamoGuardado = await this.prestamoRepo.save(nuevo);

    // (Opcional) Marcar el libro como no disponible (podría hacerse con un PUT)
    // Por simplicidad, no lo haremos, pero en una implementación real se debería actualizar.
    // Para mantener el ejemplo minimalista, solo registramos el préstamo.

    return prestamoGuardado;
  }

  async listar(): Promise<Prestamo[]> {
    return this.prestamoRepo.find();
  }
}