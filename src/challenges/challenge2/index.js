function solution(arr) {
    var arrlength = arr.length - 1;
    var max = arr[0];

    for (i = 1; i <= arrlength; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

module.exports = {
  solution
}