import express from 'express'
import mongoDbConnection from './api/config/database/connection'
import { logger } from './api/config/log/logger'
import bookRouter from './api/routes/book'
const app = express()
app.use(express.json())

async function databaseConnection(): Promise<void> {
  try {
    await mongoDbConnection()
  } catch (error) {
    logger.error(error)
  }
}

await databaseConnection()

app.use(bookRouter)

export default app
