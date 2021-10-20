import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = new DocumentBuilder()
    .setTitle('vue-h5-temp')
    .setDescription('nest api')
    .setVersion('1.0')
    .build();
  const doc = SwaggerModule.createDocument(app, conf);
  SwaggerModule.setup('api-docs', app, doc);
  await app.listen(3000);
}
bootstrap();
