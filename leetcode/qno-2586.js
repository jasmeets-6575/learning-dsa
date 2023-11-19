function temp(words, left, right) {
    let count =0
    for (let i = 0; i < words.length ; i++){
        if( words[i].split("").includes("a" || "e" || "i" || "o" || "u",left)){
            count++
        }
    }
    return count
};

console.log(temp(["are","amy","u"], 0, 2))