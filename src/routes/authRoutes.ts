import { Router } from 'express'
import AuthController from '@/controllers/AuthController'

const authRoute = Router()

const authController = new AuthController()

authRoute.post('/', authController.authenticate)

export default authRoute
