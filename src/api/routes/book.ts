// generate express crud routes
import express from 'express'

import { BookController } from '../controllers'
const router = express.Router()

const bookController = new BookController()

router.get('/', bookController.index)
router.post('/', bookController.create)
router.get('/:id', bookController.show)
router.put('/:id', bookController.update)

export default router
