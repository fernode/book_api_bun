import mongoose from 'mongoose'
import { logger } from '../log/logger'

async function mongoDbConnection(): Promise<void> {
  const connectionString = `mongodb://${process.env.DB_ADMINUSER}:${process.env.DB_ADMINPASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`

  await mongoose
    .connect(connectionString)
    .then(() => {
      logger.info('Connected to database')
    })
    .catch((err) => {
      logger.error(err)
    })
}

export default mongoDbConnection
