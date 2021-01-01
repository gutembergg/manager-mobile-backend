import User from '@/models/User'
import IUserRepository from '@/repositories/IUserRepository'
import UserRepository from '@/repositories/UserRepository'

import jwt from 'jsonwebtoken'

interface IRequest {
  name: string
  email: string
  avatar: string
  password: string
}

interface IResponse {
  token: string
  user: User
}

class CreateUserService {
  private userRepository: IUserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute({
    name,
    email,
    avatar,
    password
  }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.create({
      name,
      email,
      avatar,
      password
    })
    const token = jwt.sign({}, 'secret', { expiresIn: '1d' })

    return {
      token,
      user
    }
  }
}

export default CreateUserService
