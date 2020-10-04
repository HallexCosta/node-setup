import { SomeEntity } from '@entities/SomeEntity'

test('it should be ok', () => {
  const some = new SomeEntity()

  expect(some).toEqual({})
})