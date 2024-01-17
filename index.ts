import http from 'http'
import { logger } from '@/api/config/log/logger.ts'
import app from './src/app'

const port = process.env.PORT != null || 8000

const server = http.createServer(app)

server.listen(port, () => {
  logger.info({
    message: `Server listening on port ${port}`,
  })
})
