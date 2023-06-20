function isPowerOfTwo(n) {
    if (n < 1){
        return false;
    }
    // while (n > 1){
    //     if(n % 2 !== 0){
    //         return false
    //     }
    //     n = n / 2;
    // }
    // return true
    //       OR
    return (n & (n-1)) === 0 // Bitwise
    // Big-O = O(1) for  Bitwise 
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5)); 

// Big-O = O(logn)