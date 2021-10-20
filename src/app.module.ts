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
// import { User } from './users/users.entity';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
