
function temp(words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    function isVowelString(str) {
        return vowels.includes(str[0].toLowerCase()) && vowels.includes(str[str.length - 1].toLowerCase());
    }
 
    let counter = 0;
 
    for (let i = left; i <= right; i++) {
        if (isVowelString(words[i])) {
            counter++;
        }
    }
    return counter;
};

console.log(temp(["are","amy","u","ara","c","o","adaaa"], 0, 2))