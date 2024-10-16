import helmet from 'helmet';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

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
  // app.enableVersioning();

  // Use class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Start the application
  await app.listen(3001);
}

bootstrap();
