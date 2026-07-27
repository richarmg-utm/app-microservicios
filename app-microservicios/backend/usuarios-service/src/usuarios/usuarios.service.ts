// Lógica de negocio para usuarios
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}

  async crear(datos: Partial<Usuario>): Promise<Usuario> {
    const nuevo = this.usuarioRepo.create(datos);
    return this.usuarioRepo.save(nuevo);
  }

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepo.find();
  }

  async obtenerPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepo.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }
}