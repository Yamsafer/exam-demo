function solution(arr) {
  //... REPLACE WITH YOUR CODE
  var temp;
  for (var i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.toString();  
}

module.exports = {
  solution
}