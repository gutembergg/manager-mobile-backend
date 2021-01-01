import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('Connected database'))
  .catch(() => console.log('Not connected'))
