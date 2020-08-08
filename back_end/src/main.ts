import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { appConfig } from './config/app.config';

const port = process.env.PORT || 8080;
const { enviroment } = appConfig;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (enviroment === 'development') {
    app.enableCors();

    const options = new DocumentBuilder()
      .setTitle(`Enclave's project`)
      .setDescription('Music player API')
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

