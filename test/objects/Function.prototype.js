import test from 'ava'

test('function objects should reference Function.prototype as their prototype object', t => {
  function f () {}
  t.true(Object.getPrototypeOf(f) === Function.prototype)
  t.true(f.__proto__ === Function.prototype)
})

test('all functions have a public prototype property that references Object.prototype', t => {
  function f () {}
  t.true(Object.getPrototypeOf(f.prototype) === Object.prototype)
  t.true(f.prototype.__proto__ === Object.prototype)
})
