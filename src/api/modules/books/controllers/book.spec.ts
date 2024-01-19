import { BookModel } from '@/api/database/schemas'
import { beforeEach, describe, expect, it, mock, spyOn } from 'bun:test'
import type express from 'express'
import { BookController } from './book'

describe('BookCrontroller', () => {
  let bookController: BookController

  beforeEach(() => {
    bookController = new BookController()
  })

  describe('showAllBooks', () => {
    it('should return all books', async () => {
      const mockRequest = {} as unknown as express.Request
      const mockResponse = {
        status: mock(() => {}).mockReturnThis(),
        json: mock(() => {}),
      } as unknown as express.Response

      const mockBooks = [{ title: 'Book 1' }, { title: 'Book 2' }]
      spyOn(BookModel, 'find').mockResolvedValueOnce(mockBooks)

      await bookController.showAllBooks(mockRequest, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalledWith(mockBooks)
    })
  })

  it('should return 500 status and error message on failure', async () => {
    const mockRequest = {} as unknown as express.Request
    const mockResponse = {
      status: mock(() => {}).mockReturnThis(),
      send: mock(() => {}),
    } as unknown as express.Response

    const mockError = new Error('Internal Server Error')
    spyOn(BookModel, 'find').mockRejectedValueOnce(mockError)

    await bookController.showAllBooks(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.send).toHaveBeenCalledWith(mockError.message)
  })
})
