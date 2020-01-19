function solution(arr) {

  var max=-Infinity;
  var i;
  for(i = 0 ; i < arr.length ; i++ )
  {
     if(arr[i]>max)
        max=arr[i];
  }

  return max;  
}

module.exports = {
  solution
}