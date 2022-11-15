function maxSumArray(arr) {

    var max = arr[0]
    var tmp = 0;

    for (var i = 0; i < arr.length; i++) {
        tmp = tmp + arr[i];
        if (tmp > max) {
            max = tmp
        }
        if (tmp < 0) {
            tmp = 0;
        }
    }
    return max
}

console.log(maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));