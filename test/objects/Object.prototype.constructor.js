import test from 'ava'

test('Object.prototype.constructor should return a reference to a function', t => {
  t.true(typeof Object.prototype.constructor === 'function')
})

test('the constructor property on instances should references the function that created it', t => {
  function C () {}
  t.true(new C().constructor === C)
})

test('the constructor property should not exist on instances', t => {
  function C () {}
  t.false(new C().hasOwnProperty('constructor'))
})

test('the constructor property should exist on the function prototype', t => {
  function C () {}
  t.true(C.prototype.hasOwnProperty('constructor'))
})
