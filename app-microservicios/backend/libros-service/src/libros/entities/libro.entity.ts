import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libros')
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  titulo: string;

  @Column({ length: 100 })
  autor: string;

  @Column({ default: true })
  disponible: boolean;

  @Column({ name: 'fecha_publicacion', nullable: true })
  fechaPublicacion: Date;
}