var finalValueAfterOperations = function(operations) {
    let count = 0;
    // operations.map((item)=> item.includes("+") ? count ++ : count --)
    // return count

    for (let i = 0; i < operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++") {count++}
        else count--
    }
    return count
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));