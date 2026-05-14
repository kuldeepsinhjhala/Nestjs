import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true //It will remove additional fields from input request body. It will only pass those fields which are present in the DTO.
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
