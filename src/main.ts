import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { useContainer } from 'class-validator';

async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule);

  // Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Add security headers
  app.use(helmet());

  // Enable CORS
  app.enableCors();

  // Enable versioning
  app.enableVersioning();

  // Use class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Start the application
  await app.listen(3001);
}

bootstrap();
