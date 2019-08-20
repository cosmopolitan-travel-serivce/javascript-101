import IPerson from "../../src/interface/IPerson";
import ArrayUtils from '../../src/array/ArrayUtils'
import faker from 'faker'

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
  it('map returns last name', () => {
    let persons: IPerson[] = [{
      id: 1,
        first_name: 'Leopold Sedar', //faker.name.firstName()
        last_name: 'Senghor' // faker.name.lastName()
      }, {
      id: 1,
        first_name: 'Abdoulaye',
        last_name: 'Wade'
      }]
    let lastNames: string[] = ArrayUtils.lastNames(persons)
    expect(lastNames.length).to.equal(persons.length)
    expect(lastNames).to.contains('Senghor')
    expect(lastNames).to.contains('Wade')
  })

  it('[personsWithLastNameUpperCased] map transform Person last name to uppercase', () => {
    let persons: IPerson[] = [{
      id: 1,
        first_name: 'Leopold Sedar',
        last_name: 'Senghor'
      }, {
      id: 2,
        first_name: 'Abdoulaye',
        last_name: 'Wade'
      }]
    let transfromed:IPerson[] = ArrayUtils.personsWithLastNameUpperCased(persons)
    let senghor:IPerson = transfromed.find(person => person.id === 1) as IPerson
    let wade:IPerson = transfromed.find(person => person.id === 2) as IPerson
    expect(transfromed.length).to.equal(persons.length)
    expect(senghor.last_name).to.contains('SENGHOR')
    expect(wade.last_name).to.contains('WADE')
  })

  it('[sortNumbers] should sort array of number in order ASC', () => {
    let t: number[] = [1,3,4,8,5,0,17]
    let expected: number[] = [0,1,3,4,5,8,17]
    let sorted: number[] = ArrayUtils.sortNumbers(t)
    expect(sorted.length).to.equal(expected.length)
    expect(sameArrayValues(sorted, expected)).to.equal(true)
  })

  it('[map] with double callback should return double of array', () => {
    const t: number[] = [1,3,4,8,5,0,17]
    const expected: number[] = [2,6,8,16,10,0,34]
    const sameArray = sameArrayValues(expected, ArrayUtils.map(t, function (e: number) {
      return e*2;
    }))
    expect(sameArray).to.equal(true)
  })

  it('[map] with triplet callback should return triplet of array', () => {
    const t: number[] = [1,3,4,8,5,0,17]
    const expected: number[] = [3,9,12,24,15,0,51]
    const sameArray = sameArrayValues(expected, ArrayUtils.map(t, function (e: number) {
      return e*3;
    }))
    expect(sameArray).to.equal(true)
  })

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

  describe('Adults', () => {
    const persons: IPerson[] = ArrayUtils.range(1, 10).map((n, i) => ({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      age: i * 3
      // age: faker.date.between('1990-01-01', new Date())
    }))
    const results: IPerson[] = ArrayUtils.adults(persons)
    it('should return adults only (age >= 18)', () => {
      expect(results.length).to.equal(4)
    })
    it('should not contain only person with age < 18)', () => {
      expect(results.some(person => person.age! < 18)).to.equal(false)
    })
  })


  describe('Person', () => {
    const persons: IPerson[] = ArrayUtils.personsWithFullName([{
      id: 1,
      first_name: "Mbaye",
      last_name: "Hann",
    }, {
      id: 2,
      first_name: "Demba",
      last_name: "Fall",
    }, {
      id: 3,
      first_name: "Kouna",
      last_name: "Fall",
    }])
    const expected: IPerson[] = [{
      id: 1,
      first_name: "Mbaye",
      last_name: "Hann",
      full_name: 'Mbaye Hann'
    }, {
      id: 2,
      first_name: "Demba",
      last_name: "Fall",
      full_name: 'Demba Fall'
    }, {
      id: 3,
      first_name: "Kouna",
      last_name: "Fall",
      full_name: 'Kouna Fall'
    }]

    it('should return IPerson with full_name property on each previous object', () => {
      expect(persons.length).to.equal(expected.length)
      const comparePerson = (personA: IPerson, personB: IPerson) => {
        return personA.id === personB.id &&
         personA.first_name === personB.first_name &&
         personA.last_name === personB.last_name
      }
      expect(persons[0].full_name).to.equal(expected[0].full_name)
      expect(comparePerson(persons[0], expected[0])).to.equal(true)
      expect(persons[1].full_name).to.equal(expected[1].full_name)
      expect(comparePerson(persons[1], expected[1])).to.equal(true)
      expect(persons[2].full_name).to.equal(expected[2].full_name)
      expect(comparePerson(persons[2], expected[2])).to.equal(true)
    })
  })
})
