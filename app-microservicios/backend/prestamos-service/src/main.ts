import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3003);
  console.log('📋 Microservicio de Préstamos corriendo en puerto 3003');
}
bootstrap();