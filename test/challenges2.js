const assert = require('assert')
const challenge1 = require('../src/challenges/challenge2')

const testData = [
  {
    input: [5, 8, -1, 7, 9],
    expect: 9
  },
  {
    input: [4, 4, 4, 4],
    expect: 4
  },
  {
    input: [3, 3, 9, 2],
    expect: 9
  },
  {
    input: [9],
    expect: 9
  }
]
describe('Challenge 2 ->', function() {
  testData.forEach((data) => {
    it(`should return ${data.expect} for [${data.input}] `, function() {
      assert.equal(challenge1.solution(data.input), data.expect)
    })  
  })
})