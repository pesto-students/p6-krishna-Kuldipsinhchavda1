function isVowel(char) {
    const vowels = "auieo";
    return vowels.includes(char);
}

function vowelCount(str) {
    var vowelMap = new Map();
    for (let letter of str) {
        let lowerCase = letter.toLowerCase();

        if (isVowel(lowerCase)) {
            if (vowelMap.has(lowerCase)) {
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1)
            }
            else {
                vowelMap.set(lowerCase, 1);
            }
        }
    }
    return vowelMap;
}
console.log(vowelCount("kuldipsinh"));

