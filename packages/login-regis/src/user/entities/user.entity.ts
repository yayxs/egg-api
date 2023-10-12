import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  // id 主键 自动递增
  @PrimaryGeneratedColumn()
  id: number;

  // varchar50
  @Column({
    length: 50,
    comment: '用户名',
  })
  username: string;

  @Column({
    length: 50,
    comment: '密码',
  })
  password: string;

  // datetime 类型
  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime: Date;
  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateTime: Date;
}
