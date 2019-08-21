import ObjectUtils from "../../src/object/ObjectUtils";
import IPerson from "../../src/interface/IPerson";
const expect = require('chai').expect

describe('Object', () => {
  let inputs: any[] = [{name:'Virginie Lamesse'},{name:'Zeynab Sarr'},{name:'Kine Sidibe'},{name:'Arona Sow'},{name:'Kine Sow'}
  ,{name:'Kouna Fall'},{name:'Fatou Fall'}, {
      name: 'Amadou Hampathé Ba'
    }, {
      name: 'Optimus MotherF Perseus Prime'
    }]
  let results: IPerson[] = inputs.map((input: any) => ObjectUtils.getFirstNameAndLastNameFromName(input))
  let expected: IPerson[] = [{
    first_name: 'Virginie',
    last_name: 'Lamesse'
  }, {
    first_name: 'Zeynab',
    last_name: 'Sarr'
  }, {
    first_name: 'Kine',
    last_name: 'Sidibe'
  }, {
    first_name: 'Arona',
    last_name: 'Sow'
  }, {
    first_name: 'Kine',
    last_name: 'Sow'
  }, {
    first_name: 'Kouna',
    last_name: 'Fall'
  }, {
    first_name: 'Fatou',
    last_name: 'Fall'
  }, {
    first_name: 'Amadou Hampathé',
    last_name: 'Ba'
  }, {
    first_name: 'Optimus MotherF Perseus',
    last_name: 'Prime'
  }]
  it('when used on array should return same number of inputs', () => {
    console.log('expected: %s, results: %s', expected.length, results.length)
    expect(results.length).to.equal(inputs.length)
  })
  it('should return Person with first_name and last_name from name property', () => {
    results.forEach((result: IPerson, index: number) => {
      console.log({result, expected: expected[index]})
      expect(results[index].first_name).to.equal(expected[index].first_name)
      expect(results[index].last_name).to.equal(expected[index].last_name)
    })
  })
  it('should have name = first_name + \' \' + last_name', () => {
    results.forEach((result: IPerson, index: number) => {
      expect(results[index].first_name + ' ' + results[index].last_name).to.equal(inputs[index].name)
    })
  })

  const input = {
    name: 'John Doe',
    age: 15,
    zWorth: 'hundred'
  }
  const response = ObjectUtils.getFirstNameAndLastNameFromName(input)
  it('should work when input have another property (the last property)', () => {
    expect(response.first_name).to.equal('John')
    expect(response.last_name).to.equal('Doe')
  })
})
