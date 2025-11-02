import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(
      `Server listen on http://127.0.0.1:${process.env.PORT ?? 3000}`,
    );
  });
}
void bootstrap();
