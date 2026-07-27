import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3002);
  console.log('📖 Microservicio de Libros corriendo en puerto 3002');
}
bootstrap();