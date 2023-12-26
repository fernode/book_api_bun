import express from 'express'
import bookRouter from './api/routes/book'
const app = express()

app.use(bookRouter)

export default app
