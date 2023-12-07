var findWordsContaining = function(words, x) {
    let result = []
    for(let i =0; i< words.length-1; i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));