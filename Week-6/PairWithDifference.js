function arrayCheck(array, diff) {


    var set = new Set(array);

    for (const k of array) {
        if (set.has(k - diff)) {
            return true
        }
    }
    return false

}

console.log(arrayCheck([5, 10, 3, 2, 50, 80], 78))