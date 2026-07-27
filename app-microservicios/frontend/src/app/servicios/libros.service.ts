import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  id?: number;
  titulo: string;
  autor: string;
  disponible: boolean;
  fechaPublicacion?: Date;
}

@Injectable({ providedIn: 'root' })
export class LibrosService {
  private apiUrl = 'http://localhost:3002/libros';

  constructor(private http: HttpClient) { }

  listar(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  crear(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }
}