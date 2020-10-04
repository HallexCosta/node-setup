import { Request, Response } from 'express'

import { SomeCaseUseCase } from './SomeCaseUseCase'

export class SomeCaseController {
  constructor (
    private someCaseUseCase: SomeCaseUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const data = await request.body

    try {
      await this.someCaseUseCase.execute(data)

      return response.status(200).json({ success: true })
    } catch (e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }
}
