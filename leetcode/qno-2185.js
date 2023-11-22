var prefixCount = function(words, pref) {
    let res = words.filter((item)=> item.startsWith(pref))
    if(res) return res.length
    else 0
};

console.log(prefixCount(["pay","attention","practice","attend"],"at"));