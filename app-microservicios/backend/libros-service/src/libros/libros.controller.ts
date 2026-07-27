import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './entities/libro.entity';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  async crear(@Body() datos: Partial<Libro>): Promise<Libro> {
    return this.librosService.crear(datos);
  }

  @Get()
  async listar(): Promise<Libro[]> {
    return this.librosService.listar();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: number): Promise<Libro> {
    return this.librosService.obtenerPorId(id);
  }
}