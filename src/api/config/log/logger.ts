import pinoLogger from 'pino'

export const logger = pinoLogger({
  level: process.env.PINO_LOG_LEVEL ?? 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
})
