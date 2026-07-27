// Controlador REST para operaciones de usuarios
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // POST /usuarios - Registrar un nuevo usuario
  @Post()
  async crear(@Body() datos: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.crear(datos);
  }

  // GET /usuarios - Obtener todos los usuarios
  @Get()
  async listar(): Promise<Usuario[]> {
    return this.usuariosService.listar();
  }

  // GET /usuarios/:id - Obtener un usuario por ID (se usará desde préstamos)
  @Get(':id')
  async obtenerPorId(id: number): Promise<Usuario> {
    return this.usuariosService.obtenerPorId(id);
  }
}