/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('PORT') || 3000;
  await app.listen(port);
}

bootstrap();
