import http from 'http'
import { logger } from './src/api/config/log/logger'
import app from './src/app'

const port = process.env.PORT || 8000

const server = http.createServer(app)

server.listen(port, () =>
  logger.info({
    message: `Server listening on port ${port}`,
  })
)
