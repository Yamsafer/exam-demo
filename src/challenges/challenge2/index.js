function solution(arr) {
  let great = arr[0]
  for(let i=0;i< arr.length; i++){
    if(arr[i] > great)
    great = arr[i]
  }
  return great.toString(); 
}

module.exports = {
  solution
}