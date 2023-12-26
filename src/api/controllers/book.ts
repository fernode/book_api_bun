import express from 'express'

export class BookController {
  public async index(req: express.Request, res: express.Response) {
    res.status(200).json({
      message: 'Hello World!',
    })
  }
  public async create(req: express.Request, res: express.Response) {
    // ...
  }
  public async show(req: express.Request, res: express.Response) {
    // ...
  }
  public async update(req: express.Request, res: express.Response) {
    // ...
  }
  public async destroy(req: express.Request, res: express.Response) {
    // ...
  }
}
