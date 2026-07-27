import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Prestamo {
  id?: number;
  usuarioId: number;
  libroId: number;
  fechaPrestamo?: Date;
  fechaDevolucion?: Date;
  estado?: string;
}

@Injectable({ providedIn: 'root' })
export class PrestamosService {
  private apiUrl = 'http://localhost:3003/prestamos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  crear(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }
}