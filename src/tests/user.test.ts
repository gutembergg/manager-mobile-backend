import ICreateUserDTO from '@/dtos/ICreateUserDTO'
import requet from 'supertest'

import app from '../App'

let users: ICreateUserDTO

/* beforeEach(() => {
  users = {
    name: 'Guto',
    email: 'gmascarenhas3001@gmail.com',
    password: '1234'
  }
}) */
/* test('should create User', async () => {
  const response = await requet(app).post('/users').send(users)

  expect(response.body).toStrictEqual(users)
}) */

test('should test', () => {
  const x = 2

  expect(x).toEqual(2)
})

/*
test('should return status code 200', async () => {
  const response = await requet(app).post('/auth').send({
    email: 'gmascarenhas3001@gmail.com',
    password: '1234'
  })

  expect(response.status).toBe(200)
}) */
