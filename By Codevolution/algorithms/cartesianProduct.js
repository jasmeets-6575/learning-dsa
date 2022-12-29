function cartesianProduct(arrA, arrB) {
    const product = []
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            product.push([arrA[i], arrB[j]])
        }
    }
    return product
}
const arrA = [1, 3]
const arrB = [4, 5, 7]
console.log(cartesianProduct(arrA, arrB));