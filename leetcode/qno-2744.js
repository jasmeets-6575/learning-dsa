var maximumNumberOfStringPairs = function(words) {
    let newSet = new Set()
    let count = 0
    for (let word of words) {
        let sortedStr = word.split('').sort().join('')
        if(!newSet.has(sortedStr)) newSet.add(sortedStr)
        else count++
    }
    return count
}

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]));