var isAcronym = function(words, s) {
    if(words.map((item)=>item.charAt(0)).join("") === s) return true
    return false
};

console.log(isAcronym(["alice","bob","charlie"],"abc"));