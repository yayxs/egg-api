import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// controllers
import { AppController } from './app.controller';
// services
import { AppService } from './app.service';
// entitys
import { User } from './users/users.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '49.235.67.92',
      port: 3306,
      username: 'root',
      password: 'Vast2022.',
      database: 'vast_h5_temp', // synchronize: true不应在生产中使用设置- 否则您可能会丢失生产数据。
      entities: [User],
      synchronize: true, //
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
