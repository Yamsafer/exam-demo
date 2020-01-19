const assert = require('assert')
const challenge1 = require('../src/challenges/challenge1')

const testData = [
  {
    input: [5, 8, -1, 7, 9],
    expect: [9, 7, -1, 8, 5]
  },
  {
    input: [4, 4, 4, 4],
    expect: [4, 4, 4, 4]
  },
  {
    input: [3, 3, 9, 2],
    expect: [2, 9, 3, 3]
  },
  {
    input: [9],
    expect: [9]
  }
]
/*
describe('Challenge 1 ->', function() {
  testData.forEach((data) => {
    it(`should return ${data.expect} for [${data.input}] `, function() {
      assert.equal(challenge1.solution(data.input), data.expect)
    })  
  })
})*/

var ele;
testData.forEach(data => {

  ele=challenge1.solution(data.input);
  console.log(ele);

 // ele = challenge1.solution(data.input);
     var i;
    for(i=0 ; i < ele.length ; i++)
        assert.equal(ele[i], data.expect[i]);
});