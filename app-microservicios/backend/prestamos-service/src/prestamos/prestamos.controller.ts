import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { Prestamo } from './entities/prestamo.entity';

@Controller('prestamos')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}

  // POST /prestamos - Registrar un préstamo (con validaciones)
  @Post()
  async crear(@Body() datos: Partial<Prestamo>): Promise<Prestamo> {
    return this.prestamosService.crear(datos);
  }

  // GET /prestamos - Historial completo de préstamos
  @Get()
  async listar(): Promise<Prestamo[]> {
    return this.prestamosService.listar();
  }
}