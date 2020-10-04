import { SomeCaseController } from '@useCases/SomeCase/SomeCaseController'
import { SomeCaseUseCase } from '@useCases/SomeCase/SomeCaseUseCase'
import { SQLiteSomeRepository } from '@repositories/implementations/SQLiteSomeRepository'

const sqliteSomeRepository = new SQLiteSomeRepository()

const someCaseUseCase = new SomeCaseUseCase(
  sqliteSomeRepository
)

const someCaseController = new SomeCaseController(
  someCaseUseCase
)

export { someCaseUseCase, someCaseController }
