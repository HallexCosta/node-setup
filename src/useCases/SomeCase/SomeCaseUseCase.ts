import { ISomeRepository } from '@repositories/ISomeRepository'
import { TSomeCaseRequestDTO } from '@useCases/SomeCase/SomeCaseDTO'

export class SomeCaseUseCase {
  constructor (
    private someRepository: ISomeRepository
  ) {}

  async execute (data: TSomeCaseRequestDTO) {
    await this.someRepository.some()
  }
}
