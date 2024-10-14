import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule);

  // Enable versioning
  app.enableVersioning();

  // Start the application
  await app.listen(3001);
}

bootstrap();
