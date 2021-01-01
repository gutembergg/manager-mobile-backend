import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

import bcrypt from 'bcryptjs'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  avatar: string

  @Column()
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  async generatePasswordHash(): Promise<void> {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}

export default User
