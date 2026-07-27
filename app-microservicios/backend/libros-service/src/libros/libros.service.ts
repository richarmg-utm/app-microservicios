import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private libroRepo: Repository<Libro>,
  ) {}

  async crear(datos: Partial<Libro>): Promise<Libro> {
    const nuevo = this.libroRepo.create(datos);
    return this.libroRepo.save(nuevo);
  }

  async listar(): Promise<Libro[]> {
    return this.libroRepo.find();
  }

  async obtenerPorId(id: number): Promise<Libro> {
    const libro = await this.libroRepo.findOne({ where: { id } });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }
}