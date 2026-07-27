import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from '../../servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];
  nuevoLibro: Libro = { titulo: '', autor: '', disponible: true };

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.librosService.listar().subscribe(data => this.libros = data);
  }

  registrar(): void {
    if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor) return;
    this.librosService.crear(this.nuevoLibro).subscribe(() => {
      this.nuevoLibro = { titulo: '', autor: '', disponible: true };
      this.cargarLibros();
    });
  }
}