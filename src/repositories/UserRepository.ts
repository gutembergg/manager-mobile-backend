import ICreateUserDTO from '@/dtos/ICreateUserDTO'
import User from '@/models/User'
import { getRepository, Repository } from 'typeorm'
import IUserRepository from './IUserRepository'

class UserRepository implements IUserRepository {
  private ormrepository: Repository<User>

  constructor() {
    this.ormrepository = getRepository(User)
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.ormrepository.findOne({
      where: { email }
    })

    return user
  }

  public async findById(id: string): Promise<User> {
    const user = await this.ormrepository.findOne({
      where: { id }
    })

    return user
  }

  public async create({
    name,
    email,
    avatar,
    password
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormrepository.create({
      name,
      email,
      avatar,
      password
    })

    await this.ormrepository.save(user)

    delete user.password
    return user
  }

  public async save(user: User): Promise<User> {
    return this.ormrepository.save(user)
  }

  public async delete(id: string): Promise<void> {
    this.ormrepository.delete(id)
  }
}

export default UserRepository
