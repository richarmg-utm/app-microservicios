import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('prestamos')
export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usuario_id' })
  usuarioId: number;

  @Column({ name: 'libro_id' })
  libroId: number;

  @CreateDateColumn({ name: 'fecha_prestamo' })
  fechaPrestamo: Date;

  @Column({ name: 'fecha_devolucion', nullable: true })
  fechaDevolucion: Date;

  @Column({ default: 'activo' }) // 'activo' o 'devuelto'
  estado: string;
}