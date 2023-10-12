import { Module } from '@nestjs/common';
// 引入jwtModule
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // 动态模块
    // JwtModule.registerAsync({
    //   async useFactory() {
    //     await 111;
    //   },
    // }),
    JwtModule.register({
      secret: 'jwt-key',
      signOptions: {
        expiresIn: '7d', // 7天
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
