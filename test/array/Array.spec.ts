// process.env.NODE_ENV = 'testing'
import IPerson from "../../src/interface/IPerson";

const expect = require('chai').expect
import ArrayUtils from '../../src/array/ArrayUtil'
import NumberUtils from "../../src/number/NumberUtils";
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
    let senghor:IPerson = transfromed.find(person => person.id === 1)
    let wade:IPerson = transfromed.find(person => person.id === 2)
    expect(transfromed.length).to.equal(persons.length)
    expect(senghor.last_name).to.contains('SENGHOR')
    expect(wade.last_name).to.contains('WADE')
  })

  it('[sortNumbers] should sort array of number in order ASC', () => {
    let t: number[] = [1,3,4,8,5,0,17]
    let expected: number[] = [0,1,3,4,5,8,17]
    let sorted: number[] = ArrayUtils.sortNumbers(t)
    expect(sorted.length).to.equal(expected.length)
    for (let i = 0; i < sorted.length; i++) {
      expect(sorted[i]).to.equal(expected[i])
    }
  })

  it('[map] with double callback should return double of array', () => {
    const t: number[] = [1,3,4,8,5,0,17]
    const expected: number[] = [2,6,8,10,0,34]
    const sameArray = sameArrayValues(expected, ArrayUtils.map(t, function (e: number) {
      return e*2;
    }))
    expect(sameArray).to.equal(true)
  })

  it('[map] with triplet callback should return double of array', () => {
    const t: number[] = [1,3,4,8,5,0,17]
    const expected: number[] = [3,9,12,32,15,0,51]
    const sameArray = sameArrayValues(expected, ArrayUtils.map(t, function (e: number) {
      return e*3;
    }))
    expect(sameArray).to.equal(true)
  })
})
