
function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1, 3, 4, 53]))