import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import './database'
import Routes from './routes'
import AppErros from './errors/AppErros'

const app = express()

app.use(express.json())
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppErros) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message })
  }
  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' })
})
app.use(Routes)

export default app
