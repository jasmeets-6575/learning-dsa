function temp(sentences) {
    return Math.max(...sentences.map(item=>item.split(" ").length))

    // let max =0 
    // for( let word of sentences){
    //     if(word.split(' ').length > max ) max = word.split(' ').length 
    // }
    // return max
};

console.log(temp(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))