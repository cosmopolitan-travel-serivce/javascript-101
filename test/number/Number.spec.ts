const expect = require('chai').expect
const assert = require('chai').assert
import NumberUtils from '../../src/number/NumberUtils'
// import faker from 'faker'
// import 'faker/locale/en'

describe('NumberUtils', () => {
  it('Sum should returns sum of an array of numbers', () => {
    const t = [1,3,4,8,5,0,17]
    expect(NumberUtils.sum(t)).to.equal(38)
  })

  it('Average should returns average of an array of numbers', () => {
   const t = [1,3,4,8,5,0,17]
    expect(NumberUtils.average(t)).to.equal(38/7)
  })

  it('Average of empty array of number should return 0', () => {
   let t: number[] = []
    expect(NumberUtils.average(t)).to.equal(0)
  })

  it('[findIndex] should return index of element if found', () => {
    const t = [1,3,4,8,5,0,17]
    expect(NumberUtils.findIndex(t, 5)).to.equal(4)
    expect(NumberUtils.findIndex(t, 4)).to.equal(2)
  })

  it('[findIndex] should return -1 when element is not found', () => {
    const t = [1,3,4,8,5,0,17]
    expect(NumberUtils.findIndex(t, 10)).to.equal(-1)
  })

  it('[min] should return smallest value in array', () => {
    expect(NumberUtils.min([1,3,4,8,5,0,17])).to.equal(0)
    expect(NumberUtils.min([1,3,4,8,5,17])).to.equal(1)
    expect(NumberUtils.min([3,4,8,5,17])).to.equal(3)
    expect(NumberUtils.min([4,8,5,17])).to.equal(4)
  })

  it('[min] should throw Error when array is empty', () => {
    assert.throws(() => NumberUtils.min([]), Error)
  })


  it('[min] should with array of NaN should return NaN', () => {
    expect(NumberUtils.max([NaN, NaN])).to.equal(NaN)
  })

  it('[min] of array of NaN and a number should return that NaN', () => {
    expect(NumberUtils.max([NaN, 0])).to.equal(NaN)
  })

  it('[max] should return smallest value in array', () => {
    expect(NumberUtils.max([1,3,4,8,5,0,17])).to.equal(17)
    expect(NumberUtils.max([1,3,4,8,5,0])).to.equal(8)
    expect(NumberUtils.max([1,3,4,5,0])).to.equal(5)
    expect(NumberUtils.max([1,3,4,0])).to.equal(4)
    expect(NumberUtils.max([1,3,0])).to.equal(3)
  })

  it('[max] should throw Error when array is empty', () => {
    assert.throws(() => NumberUtils.max([parseInt('')]), Error)
  })

  it('[max] should with array of NaN should return NaN', () => {
    expect(NumberUtils.max([NaN, NaN])).to.equal(NaN)
  })

  it('[max] of array of NaN and a number should return that number', () => {
    expect(NumberUtils.max([NaN, 0])).to.equal(0)
  })

  it('[isPrime] should return prime number', () => {
    expect(NumberUtils.isPrime(1)).to.equal(false)
    expect(NumberUtils.isPrime(2)).to.equal(true)
    expect(NumberUtils.isPrime(3)).to.equal(true)
    expect(NumberUtils.isPrime(7)).to.equal(true)
    expect(NumberUtils.isPrime(8)).to.equal(false)
    expect(NumberUtils.isPrime(11)).to.equal(true)
    expect(NumberUtils.isPrime(12)).to.equal(false)
    expect(NumberUtils.isPrime(2012)).to.equal(false)
  })
})
