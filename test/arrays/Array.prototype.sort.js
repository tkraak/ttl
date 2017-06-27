import test from 'ava'

test('should modify the array, a.k.a sort in place', t => {
  const numbers = [5, 1, 4, 2, 3]
  numbers.sort()
  t.deepEqual([1, 2, 3, 4, 5], numbers)
})

test('should return the sorted array', t => {
  const numbers = [5, 1, 4, 2, 3]
  const sorted = numbers.sort()
  t.deepEqual([1, 2, 3, 4, 5], sorted)
})

test('should sort numbers according to string unicode points by default', t => {
  const numbers = [15, 1, 4, 21, 3]
  const sorted = numbers.sort()
  t.deepEqual([1, 15, 21, 3, 4], sorted)
})

test('should sort strings according to string unicode points by default', t => {
  const names = ['Mike', 'Tom', 'Jeff', 'Thierry']
  const sorted = names.sort()
  t.deepEqual(['Jeff', 'Mike', 'Thierry', 'Tom'], sorted)
})

test('should sort objects given the value of one of their properties', t => {
  const confCup = [
    {
      groupA: [
        { country: 'Portugal', points: 7 },
        { country: 'Mexico', points: 7 },
        { country: 'Russia', points: 3 },
        { country: 'New Zealand', points: 0 }
      ],
      groupB: [
        { country: 'Australia', points: 2 },
        { country: 'Chile', points: 5 },
        { country: 'Germany', points: 7 },
        { country: 'Cameroon', points: 1 }
      ]
    }
  ]
  const winnerGroupB = confCup[0].groupB.sort((a, b) => b.points - a.points)
  t.deepEqual([
    { country: 'Germany', points: 7 },
    { country: 'Chile', points: 5 },
    { country: 'Australia', points: 2 },
    { country: 'Cameroon', points: 1 }
  ], winnerGroupB)
})
