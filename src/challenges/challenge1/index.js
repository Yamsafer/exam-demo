function solution(arr) {
  
  //declaration and assignment
  var i,j,temp;
  i=0;
  j=arr.length-1;

   while(i<j){
     temp=arr[i];
     arr[i]=arr[j];
     arr[j]=temp;
     i++;
     j--;
   }
  

  return arr  
}

module.exports = {
  solution
}