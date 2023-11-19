function temp(words) {
    for( let i = 0; i< words.length; i++){
        if(words[i]=== words[i].split("").reverse().join("")){
            return words[i]
        }
    }
    return "";

    sonu
};

console.log(temp(["abc","car","adaj","racecar","cool"]))