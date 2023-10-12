import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permission } from './user/entities/permission.entity';
import { RedisModule } from './redis/redis.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    // 引入typeorm
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'meeting_room_booking_system',
      synchronize: true,
      logging: true,
      entities: [User, Role, Permission],
    }),
    UserModule,
    RedisModule,
    EmailModule,
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局的模块
      envFilePath: 'src/.env', // 指定env的位置
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
