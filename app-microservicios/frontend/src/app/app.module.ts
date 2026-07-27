import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LibrosComponent,
    PrestamosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    // <--- IMPORTANTE: para usar ngModel
    CommonModule,   // <--- IMPORTANTE: para usar pipes como date
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }