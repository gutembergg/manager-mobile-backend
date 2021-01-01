import AppErros from '@/errors/AppErros'
import User from '@/models/User'
import UserRepository from '@/repositories/UserRepository'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  token: string
  user: User
}

class AuthenticationService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppErros('User not found', 404)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new AppErros('Invalid Password', 401)
    }

    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1d' })

    delete user.password

    return {
      token,
      user
    }
  }
}

export default AuthenticationService
