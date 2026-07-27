// Módulo principal que importa el módulo de usuarios y configura la base de datos
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',      // Usuario por defecto de PostgreSQL
      password: 'admin12345',
      database: 'usuarios_db',   // Base de datos exclusiva para este servicio
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,         // Solo para desarrollo (crea tablas automáticamente)
    }),
    UsuariosModule,
  ],
})
export class AppModule {}