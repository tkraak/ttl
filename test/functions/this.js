import test from 'ava'

test('should be undefined in strict mode', t => {
  function f1() { return this}
  t.true(f1() === undefined)
})
