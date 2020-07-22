import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { appConfig } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const { port, enviroment } = appConfig;

  const app = await NestFactory.create(AppModule);

  if (enviroment === 'development') {
    app.enableCors();

    const options = new DocumentBuilder()
      .setTitle(`Enclave's Project - Music Player`)
      .setDescription('The Music player API description')
      .setVersion('1.0')
      .addBearerAuth()
      .addServer('https://api.doraneko.tk')
      .addServer('http://192.168.21.207:4000')
      .addServer('http://localhost:4000')
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('/docs', app, document);
  }

  await app.listen(port);
  Logger.log(`Server running on port: ${port}`, 'bootstrap');

}
bootstrap();
