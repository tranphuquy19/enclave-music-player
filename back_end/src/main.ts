import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Ideas Project')
    .setDescription('The ideas API description')
    .setVersion('1.0')
    .addTag('idea')
    .addBearerAuth()
    .addServer('https://api.doraneko.tk')
    .addServer('http://192.168.21.207:4000')
    .addServer('http://localhost:4000')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(port);
  Logger.log(`Server running on port: ${port}`, 'bootstrap');
}
bootstrap();

