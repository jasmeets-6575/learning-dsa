function recursionFactorial(n) {
    if(n <= 1) {
        return 1 
    }
    return recursionFactorial(n-1)*n
}

console.log(recursionFactorial(0));
console.log(recursionFactorial(1));
console.log(recursionFactorial(4));
console.log(recursionFactorial(6));