import test from 'ava'

test('function objects should reference Function.prototype as their prototype object', t => {
  function f () {}
  t.true(Object.getPrototypeOf(f) === Function.prototype)
  t.true(f.__proto__ === Function.prototype)
})

test('all functions have a public prototype property that references an object', t => {
  function f () {}
  t.true(typeof f.prototype === 'object')
})

test('the public prototype property references an object with a `constructor` property', t => {
  function f () {}
  t.true(f.prototype.hasOwnProperty('constructor'))
})

test('the public prototype property references an object wich in turn references Object.prototype as its prototype object', t => {
  function f () {}
  t.true(Object.getPrototypeOf(f.prototype) === Object.prototype)
  t.true(f.prototype.__proto__ === Object.prototype)
})
