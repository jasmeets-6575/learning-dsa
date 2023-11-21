var sortPeople = function(names, heights) {
    if (names.length === 1) return names
    let nameHeight = []
    let result = []

    for (let i = 0; i < names.length; i++) {
        nameHeight.push([names[i], heights[i]])
        console.log(nameHeight);
    }

    nameHeight.sort((a, b) => b[1] - a[1])

   nameHeight.map((item)=> result.push(item[0]))

    return result
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));