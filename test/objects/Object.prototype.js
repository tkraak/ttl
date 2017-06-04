import test from 'ava'

test('generic objects should reference Object.prototype as their prototype object', t => {
  const obj = {}
  t.true(Object.getPrototypeOf(obj) === Object.prototype)
})

test('Object.prototype should be the top of the prototype chain', t => {
  t.true(Object.getPrototypeOf(Object.prototype) === null)
})