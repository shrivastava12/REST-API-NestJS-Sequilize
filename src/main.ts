import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
async function bootstrap() {
  const port =  config.get<number>('PORT')
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
