import { Component, OnInit } from '@angular/core';
import { PrestamosService, Prestamo } from '../../servicios/prestamos.service';
import { UsuariosService, Usuario } from '../../servicios/usuarios.service';
import { LibrosService, Libro } from '../../servicios/libros.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  prestamos: Prestamo[] = [];
  usuarios: Usuario[] = [];
  libros: Libro[] = [];
  nuevoPrestamo: { usuarioId: number | null, libroId: number | null } = { usuarioId: null, libroId: null };
  mensajeError: string = '';

  constructor(
    private prestamosService: PrestamosService,
    private usuariosService: UsuariosService,
    private librosService: LibrosService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.usuariosService.listar().subscribe(data => this.usuarios = data);
    this.librosService.listar().subscribe(data => this.libros = data);
    this.prestamosService.listar().subscribe(data => this.prestamos = data);
  }

  registrarPrestamo(): void {
    this.mensajeError = '';
    const { usuarioId, libroId } = this.nuevoPrestamo;
    if (usuarioId === null || libroId === null) {
      this.mensajeError = 'Debe seleccionar un usuario y un libro.';
      return;
    }
    this.prestamosService.crear({ usuarioId, libroId }).subscribe({
      next: () => {
        this.nuevoPrestamo = { usuarioId: null, libroId: null };
        this.cargarDatos();
      },
      error: (err) => {
        this.mensajeError = err.error?.message || 'Error al registrar el préstamo.';
      }
    });
  }
}