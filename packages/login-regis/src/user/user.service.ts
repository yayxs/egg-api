import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';

import * as crypto from 'crypto';
import { LoginDto } from './dto/login.dto';

function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}

@Injectable()
export class UserService {
  // 打印日志
  private logger = new Logger();

  @InjectRepository(User)
  private userRepository: Repository<User>;

  async register(user: RegisterDto) {
    const foundUser = await this.userRepository.findOne({
      username: user.username,
    });
    console.log('user.service 找到数据库中的用户', foundUser); // 初始化是undefined
    if (foundUser) {
      throw new HttpException('用户已经存在', 200);
    }

    // 构建一个用户
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = md5(user.password);

    try {
      await this.userRepository.save(newUser);
      return '注册呈成功';
    } catch (error) {
      this.logger.error(error, UserService);
    }
  }

  async login(user: LoginDto) {
    const foundUser = await this.userRepository.findOne({
      username: user.username,
    });

    if (!foundUser) {
      throw new HttpException('用户名不存在', 200);
    }

    if (foundUser.password !== md5(user.password)) {
      throw new HttpException('密码错误', 200);
    }

    return foundUser;
  }
}
