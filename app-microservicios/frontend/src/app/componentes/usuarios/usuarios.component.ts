import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', email: '' };

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuariosService.listar().subscribe(data => this.usuarios = data);
  }

  registrar(): void {
    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.email) return;
    this.usuariosService.crear(this.nuevoUsuario).subscribe(() => {
      this.nuevoUsuario = { nombre: '', email: '' };
      this.cargarUsuarios();
    });
  }
}