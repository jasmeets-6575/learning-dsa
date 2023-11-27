var restoreString = function(s, indices) {
    let combinedArr = []
    let result = []

    for(let i =0; i<indices.length; i++){
        combinedArr.push([s.split("")[i],indices[i]])
    }
    
    combinedArr.sort((a,b) => a[1] - b[1])

    result.push(...combinedArr.map((item)=>item[0]))
    return result.join("")
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));