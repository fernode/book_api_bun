import { BookModel } from '@/api/database/schemas'
import type express from 'express'

export class BookController {
  public async showAllBooks(
    req: express.Request,
    res: express.Response,
  ): Promise<express.Response> {
    try {
      const books = await BookModel.find()
      return res.status(200).json(books)
    } catch (error: any) {
      return res.status(500).send(error.message)
    }
  }

  public async create(
    req: express.Request,
    res: express.Response,
  ): Promise<express.Response> {
    try {
      await BookModel.create(req.body.book)
      return res.status(200).json({
        message: 'Book created successfully',
      })
    } catch (error: any) {
      return res.status(500).json({
        message: 'Failed to create book',
        error: error.message,
      })
    }
  }

  public async findById(
    req: express.Request,
    res: express.Response,
  ): Promise<Express.Response> {
    try {
      const book = await BookModel.findById(req.params.id)

      if (book === null) {
        return res.status(404).json({
          message: 'Book not found',
        })
      }
      return res.status(200).json(book)
    } catch (error: any) {
      return res.status(500).json({
        message: 'Failed to find book',
        error: error.message,
      })
    }
  }
}
