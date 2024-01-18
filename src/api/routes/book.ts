import { Router } from 'express'

import { BookController } from '../modules/books'
const router = Router()

const bookController = new BookController()

router.get('/', bookController.showAllBooks)

router.post('/', bookController.create)

router.get('/:id', bookController.findById)

export default router
