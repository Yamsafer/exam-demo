const assert = require('assert')
const challenge1 = require('../src/challenges/challenge2')

const testData = [
  {
    arr: [5, 8, -1, 7, 9],
    expect: 9
  },
  {
    arr: [4, 4, 4, 4],
    expect: 4
  },
  {
    arr: [3, 3, 9, 2],
    expect: 9
  },
  {
    arr: [9],
    expect: 9
  }
]
describe('Challenge 2 ->', function() {
  testData.forEach((data) => {
    it(`should return ${data.expect} for [${data.arr}] `, function() {
      assert.equal(challenge1.solution(data.arr), data.expect)
    })  
  })
})