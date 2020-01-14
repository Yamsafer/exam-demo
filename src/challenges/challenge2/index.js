function solution(arr) {
    // since the array is not sorted, we can't use binary search with O(logn)
    // so for that linear search will be sautable with O(n) time complexity

    var max = arr[0]; // array range [1..1000] can't be empty
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

module.exports = {
    solution
}