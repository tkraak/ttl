import test from 'ava'

test('generic objects should reference Object.prototype as their prototype object', t => {
  const obj = {}
  t.true(Object.getPrototypeOf(obj) === Object.prototype)
  t.true(obj.__proto__ === Object.prototype)
})

test('Object.prototype should be the top of the prototype chain', t => {
  t.true(Object.getPrototypeOf(Object.prototype) === null)
  t.true(Object.prototype.__proto__ === null)
})

test('propertyless objects do not reference Object.prototype as their prototype object', t => {
  const obj = Object.create(null)
  t.true(Object.getPrototypeOf(obj) === null)
  t.true(obj.__proto__ === undefined)
})
