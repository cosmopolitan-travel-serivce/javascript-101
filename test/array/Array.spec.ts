import IPerson from "../../src/interface/IPerson";
import ArrayUtils from '../../src/array/ArrayUtils'

const expect = require('chai').expect
// import faker from 'faker'
// import 'faker/locale/en'

const sameArrayValues = (a: number[], b: number[]) => {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

describe('Array', () => {
  // it('map returns last name', () => {
  //   let persons: IPerson[] = [{
  //     id: 1,
  //       first_name: 'Leopold Sedar', //faker.name.firstName()
  //       last_name: 'Senghor' // faker.name.lastName()
  //     }, {
  //     id: 1,
  //       first_name: 'Abdoulaye',
  //       last_name: 'Wade'
  //     }]
  //   let lastNames: string[] = ArrayUtils.lastNames(persons)
  //   expect(lastNames.length).to.equal(persons.length)
  //   expect(lastNames).to.contains('Senghor')
  //   expect(lastNames).to.contains('Wade')
  // })
  //
  // it('[personsWithLastNameUpperCased] map transform Person last name to uppercase', () => {
  //   let persons: IPerson[] = [{
  //     id: 1,
  //       first_name: 'Leopold Sedar',
  //       last_name: 'Senghor'
  //     }, {
  //     id: 2,
  //       first_name: 'Abdoulaye',
  //       last_name: 'Wade'
  //     }]
  //   let transfromed:IPerson[] = ArrayUtils.personsWithLastNameUpperCased(persons)
  //   let senghor:IPerson = transfromed.find(person => person.id === 1) as IPerson
  //   let wade:IPerson = transfromed.find(person => person.id === 2) as IPerson
  //   expect(transfromed.length).to.equal(persons.length)
  //   expect(senghor.last_name).to.contains('SENGHOR')
  //   expect(wade.last_name).to.contains('WADE')
  // })
  //
  // it('[sortNumbers] should sort array of number in order ASC', () => {
  //   let t: number[] = [1,3,4,8,5,0,17]
  //   let expected: number[] = [0,1,3,4,5,8,17]
  //   let sorted: number[] = ArrayUtils.sortNumbers(t)
  //   expect(sorted.length).to.equal(expected.length)
  //   expect(sameArrayValues(sorted, expected)).to.equal(true)
  // })
  //
  // it('[map] with double callback should return double of array', () => {
  //   const t: number[] = [1,3,4,8,5,0,17]
  //   const expected: number[] = [2,6,8,16,10,0,34]
  //   const sameArray = sameArrayValues(expected, ArrayUtils.map(t, function (e: number) {
  //     return e*2;
  //   }))
  //   expect(sameArray).to.equal(true)
  // })
  //
  // it('[map] with triplet callback should return triplet of array', () => {
  //   const t: number[] = [1,3,4,8,5,0,17]
  //   const expected: number[] = [3,9,12,24,15,0,51]
  //   const sameArray = sameArrayValues(expected, ArrayUtils.map(t, function (e: number) {
  //     return e*3;
  //   }))
  //   expect(sameArray).to.equal(true)
  // })

  describe('Range', () => {
    const range: number[] = ArrayUtils.range(1, 10)
    it('should return number[] of size 10', () => {
      expect(range.length).to.equal(10)
    })
    it('range(1, 10) should contains numbers from from 1 to 10', () => {
      expect(range.includes(1)).to.equal(true)
      expect(range.includes(2)).to.equal(true)
      expect(range.includes(3)).to.equal(true)
      expect(range.includes(4)).to.equal(true)
      expect(range.includes(5)).to.equal(true)
      expect(range.includes(6)).to.equal(true)
      expect(range.includes(7)).to.equal(true)
      expect(range.includes(8)).to.equal(true)
      expect(range.includes(9)).to.equal(true)
      expect(range.includes(10)).to.equal(true)
    })
  })

  describe('FilterEven', () => {
    let evens: number[] = ArrayUtils.filterEven(ArrayUtils.range(1, 10))
    it('should return elements of array that are even (element mod 2 == 0)', () => {
      expect(evens.length).to.equal(5)
    })
    it('filterEven(range(1, 10)) should of contain 1', () => {
      expect(evens.includes(1)).to.equal(false)
    })
    it('filterEven(range(1, 10)) should of contain 2', () => {
      expect(evens.includes(2)).to.equal(true)
    })
    it('filterEven(range(1, 10)) should of contain 3', () => {
      expect(evens.includes(3)).to.equal(false)
    })
    it('filterEven(range(1, 10)) should of contain 4', () => {
      expect(evens.includes(4)).to.equal(true)
    })
    it('filterEven(range(1, 10)) should of contain 5', () => {
      expect(evens.includes(5)).to.equal(false)
    })
    it('filterEven(range(1, 10)) should of contain 6', () => {
      expect(evens.includes(6)).to.equal(true)
    })
    it('filterEven(range(1, 10)) should of contain 7', () => {
      expect(evens.includes(7)).to.equal(false)
    })
    it('filterEven(range(1, 10)) should of contain 8', () => {
      expect(evens.includes(8)).to.equal(true)
    })
    it('filterEven(range(1, 10)) should of contain 9', () => {
      expect(evens.includes(9)).to.equal(false)
    })
    it('filterEven(range(1, 10)) should of contain 10', () => {
      expect(evens.includes(10)).to.equal(true)
    })
  })

  describe('FilterOdd', () => {
    let odds: number[] = ArrayUtils.filterOdd(ArrayUtils.range(1, 10))
    it('should return elements of array that are even (element mod 2 !== 0)', () => {
      expect(odds.length).to.equal(5)
    })
    it('filterOdd(range(1, 10)) should of contain 1', () => {
      expect(odds.includes(1)).to.equal(true)
    })
    it('filterOdd(range(1, 10)) should of contain 2', () => {
      expect(odds.includes(2)).to.equal(false)
    })
    it('filterOdd(range(1, 10)) should of contain 3', () => {
      expect(odds.includes(3)).to.equal(true)
    })
    it('filterOdd(range(1, 10)) should of contain 4', () => {
      expect(odds.includes(4)).to.equal(false)
    })
    it('filterOdd(range(1, 10)) should of contain 5', () => {
      expect(odds.includes(5)).to.equal(true)
    })
    it('filterOdd(range(1, 10)) should of contain 6', () => {
      expect(odds.includes(6)).to.equal(false)
    })
    it('filterOdd(range(1, 10)) should of contain 7', () => {
      expect(odds.includes(7)).to.equal(true)
    })
    it('filterOdd(range(1, 10)) should of contain 8', () => {
      expect(odds.includes(8)).to.equal(false)
    })
    it('filterOdd(range(1, 10)) should of contain 9', () => {
      expect(odds.includes(9)).to.equal(true)
    })
    it('filterOdd(range(1, 10)) should of contain 10', () => {
      expect(odds.includes(10)).to.equal(false)
    })
  })

  describe('FilterDiv3', () => {
    let div3: number[] = ArrayUtils.filterDiv3(ArrayUtils.range(1, 10))
    it('should return elements of array that are even (element mod 3 == 0)', () => {
      expect(div3.length).to.equal(3)
    })
    it('filterDiv3(range(1, 10)) should of contain 1', () => {
      expect(div3.includes(1)).to.equal(false)
    })
    it('filterDiv3(range(1, 10)) should of contain 2', () => {
      expect(div3.includes(2)).to.equal(false)
    })
    it('filterDiv3(range(1, 10)) should of contain 3', () => {
      expect(div3.includes(3)).to.equal(true)
    })
    it('filterDiv3(range(1, 10)) should of contain 4', () => {
      expect(div3.includes(4)).to.equal(false)
    })
    it('filterDiv3(range(1, 10)) should of contain 5', () => {
      expect(div3.includes(5)).to.equal(false)
    })
    it('filterDiv3(range(1, 10)) should of contain 6', () => {
      expect(div3.includes(6)).to.equal(true)
    })
    it('filterDiv3(range(1, 10)) should of contain 7', () => {
      expect(div3.includes(7)).to.equal(false)
    })
    it('filterDiv3(range(1, 10)) should of contain 8', () => {
      expect(div3.includes(8)).to.equal(false)
    })
    it('filterDiv3(range(1, 10)) should of contain 9', () => {
      expect(div3.includes(9)).to.equal(true)
    })
    it('filterDiv3(range(1, 10)) should of contain 10', () => {
      expect(div3.includes(10)).to.equal(false)
    })
  })

  describe('FilterDiv4', () => {
    let inputs: number[] = ArrayUtils.range(1, 10)
    let numbers: number[] = ArrayUtils.filterDiv4(inputs)
    const expected = [4, 8]
    const notExpected = inputs.filter(n => !expected.includes(n))
    it('should return elements of array that are even (element mod 4 == 0)', () => {
      expect(numbers.length).to.equal(2)
    })
    it('filterDiv4(range(1, 10)) should contain ' + expected.join(', '), () => {
      expected.forEach(e => {
        expect(numbers.includes(e)).to.equal(true)
      })
    })
    it('filterDiv4(range(1, 10)) should not contain ' + notExpected.join(', '), () => {
      notExpected.forEach(e => {
        expect(numbers.includes(e)).to.equal(false)
      })
    })
  })

  describe('FilterDiv5', () => {
    let inputs: number[] = ArrayUtils.range(1, 10)
    let numbers: number[] = ArrayUtils.filterDiv5(inputs)
    const expected = [5, 10]
    const notExpected = inputs.filter(n => !expected.includes(n))
    it('should return elements of array that are even (element mod 4 == 0)', () => {
      expect(numbers.length).to.equal(2)
    })
    it('filterDiv5(range(1, 10)) should contain ' + expected.join(', '), () => {
      expected.forEach(e => {
        expect(numbers.includes(e)).to.equal(true)
      })
    })
    it('filterDiv5(range(1, 10)) should not contain ' + notExpected.join(', '), () => {
      notExpected.forEach(e => {
        expect(numbers.includes(e)).to.equal(false)
      })
    })
  })

  describe('FilterDiv10', () => {
    let inputs: number[] = ArrayUtils.range(1, 100)
    let numbers: number[] = ArrayUtils.filterDiv10(inputs)
    const expected = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const notExpected = inputs.filter(n => !expected.includes(n))
    it('should return elements of array that are even (element mod 10 == 0)', () => {
      expect(numbers.length).to.equal(expected.length)
    })
    it('filterDiv10(range(1, 100)) should contain ' + expected.join(', '), () => {
      expected.forEach(e => {
        expect(numbers.includes(e)).to.equal(true)
      })
    })
    it('filterDiv10(range(1, 100)) should not contain ' + notExpected.join(', '), () => {
      notExpected.forEach(e => {
        expect(numbers.includes(e)).to.equal(false)
      })
    })
  })

  describe('FilterDiv100', () => {
    let inputs: number[] = ArrayUtils.range(1, 1000)
    let numbers: number[] = ArrayUtils.filterDiv100(inputs)
    const expected = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    const notExpected = inputs.filter(n => !expected.includes(n))
    it('should return elements of array that are even (element mod 100 == 0)', () => {
      expect(numbers.length).to.equal(expected.length)
    })
    it('filterDiv100(range(1, 1000)) should contain ' + expected.join(', '), () => {
      expected.forEach(e => {
        expect(numbers.includes(e)).to.equal(true)
      })
    })
    it('filterDiv100(range(1, 10)) should not contain element not from ' + expected.join(', '), () => {
      notExpected.forEach(e => {
        expect(numbers.includes(e)).to.equal(false)
      })
    })
  })

  describe('FilterDiv1000', () => {
    let inputs: number[] = ArrayUtils.range(1, 10000)
    let numbers: number[] = ArrayUtils.filterDiv1000(inputs)
    const expected = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
    const notExpected = inputs.filter(n => !expected.includes(n))
    it('should return elements of array that are even (element mod 1000 == 0)', () => {
      expect(numbers.length).to.equal(expected.length)
    })
    it('filterDiv1000(range(1, 10000)) should contain ' + expected.join(', '), () => {
      expected.forEach(e => {
        expect(numbers.includes(e)).to.equal(true)
      })
    })
    it('filterDiv1000(range(1, 10000)) should not contain element different from ' + expected.join(', '), () => {
      notExpected.forEach(e => {
        expect(numbers.includes(e)).to.equal(false)
      })
    })
  })
})
