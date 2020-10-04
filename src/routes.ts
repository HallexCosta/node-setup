import { Router, Request, Response } from 'express'

import { someCaseController } from '@useCases/SomeCase'

const routes: Router = Router()

routes.post('/', (request: Request, response: Response) => {
  return someCaseController.handle(request, response)
})

export { routes }