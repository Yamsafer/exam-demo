function solution(arr) {
  let temp;
  let len = arr.length
  for(let i=0;i<len/2;i++){
    temp = arr[len-i-1]
    arr[len-i-1]=arr[i]
    arr[i] = temp
  }
  return arr.toString()
}

module.exports = {
  solution
}