import { Router } from 'express'
import userRouter from './userRoute'
import authRoute from './authRoutes'

const routes = Router()

routes.use('/users', userRouter)
routes.use('/auth', authRoute)

export default routes
