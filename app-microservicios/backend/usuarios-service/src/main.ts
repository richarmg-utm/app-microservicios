// Punto de entrada del microservicio de usuarios
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Permitir peticiones desde el frontend
  await app.listen(3001);
  console.log('📚 Microservicio de Usuarios corriendo en puerto 3001');
}
bootstrap();