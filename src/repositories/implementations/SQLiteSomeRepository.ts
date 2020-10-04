import { ISomeRepository } from '@repositories/ISomeRepository'

export class SQLiteSomeRepository implements ISomeRepository {
  async some(): Promise<void> {}
}
