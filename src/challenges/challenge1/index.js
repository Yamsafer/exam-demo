function solution(arr) {
  //... REPLACE WITH YOUR CODE
    var arrlength = arr.length - 1;
    for (i = 0; i <= arrlength / 2; i++) {
        var x = arr[i];
        var y = arr[arrlength - i];
        arr[i] = y;
        arr[arrlength - i] = x;
    }
    return arr
}

module.exports = {
  solution
}