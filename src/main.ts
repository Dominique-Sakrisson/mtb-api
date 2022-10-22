import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { loggerFunc } from './logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(loggerFunc)
  //addition of globally scoped exception filter. 
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
