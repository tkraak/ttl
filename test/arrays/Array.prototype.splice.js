import test from 'ava'

test.beforeEach(t => {
  t.context.numbers = [1, 2, 3, 4, 5]
})

test('Array.prototype.splice should modify the array', t => {
  t.context.numbers.splice(2, 3)
  t.deepEqual([1, 2], t.context.numbers)
})

test('Array.prototype.splice should return the removed elements', t => {
  const result = t.context.numbers.splice(2, 3)
  t.deepEqual([3, 4, 5], result)
})
