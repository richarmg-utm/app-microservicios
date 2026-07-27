import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }