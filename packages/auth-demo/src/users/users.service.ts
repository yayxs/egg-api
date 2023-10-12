// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './users.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}

//   // async findOne(username: string): Promise<User | undefined> {
//   //   return this.users.find((user) => user.username === username);
//   // }

//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }

//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
// }

import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
