import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PrestamosController } from './prestamos.controller';
import { PrestamosService } from './prestamos.service';
import { Prestamo } from './entities/prestamo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prestamo]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PrestamosController],
  providers: [PrestamosService],
})
export class PrestamosModule {}