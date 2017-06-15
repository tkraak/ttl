import test from 'ava'

test('should be undefined in strict mode', t => {
  function f () { return this }
  t.true(f() === undefined)
})

test('should reference the implicitly bound object', t => {
  const obj = {
    a: 42,
    method: function () { return this.a }
  }
  t.is(obj.method(), 42)
})

test('should reference the explicitly bound object via Function.prototype.call()', t => {
  function f () { return this.a }
  const obj = {
    a: 42
  }
  t.is(f.call(obj), 42)
})

test('should reference the explicitly bound object via Function.prototype.apply()', t => {
  function f () { return this.a }
  const obj = {
    a: 42
  }
  t.is(f.apply(obj), 42)
})

test('implicitly lost due to explicit reference assignment', t => {
  function f1 () { return this.a }
  const obj = {
    a: 42,
    method: f1
  }
  const f2 = obj.method
  const error = t.throws(() => {
    f2()
  }, TypeError)
  t.is(error.message, "Cannot read property 'a' of undefined")
  t.is(f2, f1)
})

test('implicitly lost due to implicit reference assignment', t => {
  function f1 () { return this.a }
  function f2 (fn) { fn() }
  const obj = {
    a: 42,
    method: f1
  }
  const error = t.throws(() => {
    f2(obj.method)
  }, TypeError)
  t.is(error.message, "Cannot read property 'a' of undefined")
})

test('should reference the hard bound object via wrapper function', t => {
  function f1 () { return this.a }
  function f2 () { return f1.call(obj) }
  const obj = {
    a: 42
  }
  t.is(f2(), 42)
  t.is(f2.call(global), 42)
})

test('should reference the hard bound object via Function.property.bind()', t => {
  function f1 () { return this.a }
  const obj = {
    a: 42
  }
  const f2 = f1.bind(obj)
  t.is(f2(), 42)
})

test('should reference the `new` bound object', t => {
  function F (a) {
    this.a = a
    t.is(typeof this, 'object')
    t.true(this instanceof F)
  }
  const obj = new F(42)
  t.is(typeof obj, 'object')
  t.is(obj.a, 42)
})
