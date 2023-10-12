import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用session
  app.use(
    session({
      secret: 'secret-string-key', // 加密的秘钥
      resave: false, // 内容改变的时候才去更新
      saveUninitialized: false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
