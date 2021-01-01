import UserRepository from '@/repositories/UserRepository'
import AuthenticationService from '@/services/AuthenticationService'
import { Request, Response } from 'express'

class AuthController {
  public async authenticate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const userRepository = new UserRepository()
    const authService = new AuthenticationService(userRepository)

    const auth = await authService.execute({
      email,
      password
    })

    return res.status(201).json(auth)
  }
}

export default AuthController
