function summation(n) {
    const sum = [0,1] ;
    for (let i=2; i<n ;i++) {
        sum[i] = sum[i-1] + sum[i-2] ;
    }
    return sum ;
}
console.log(summation(4));
console.log(summation(6));
console.log(summation(8));

// big - O = O(n)