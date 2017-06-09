import test from 'ava'

test.beforeEach(t => {
  t.context.numbers = [1, 2, 3, 4, 5]
})

test('Array.prototype.splice should modify the array', t => {
  t.context.numbers.splice(2, 3)
  t.deepEqual([1, 2], t.context.numbers)
})

test('Array.prototype.splice should empty the array when invoked with undefined', t => {
  t.context.numbers.splice(undefined)
  t.deepEqual([], t.context.numbers)
})

test('Array.prototype.splice should empty the array when invoked with null', t => {
  t.context.numbers.splice(null)
  t.deepEqual([], t.context.numbers)
})

test('Array.prototype.splice should return the removed elements', t => {
  const removed = t.context.numbers.splice(2, 3)
  t.deepEqual([3, 4, 5], removed)
})

test('Array.prototype.splice should return an unmodified array when invoked with undefined', t => {
  const removed = t.context.numbers.splice(undefined)
  t.deepEqual([1, 2, 3, 4, 5], removed)
})

test('Array.prototype.splice should return an unmodified array when invoked with null', t => {
  const removed = t.context.numbers.splice(null)
  t.deepEqual([1, 2, 3, 4, 5], removed)
})
