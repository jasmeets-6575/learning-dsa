// function factorial(num) {
//   if (num === 0) return 1;
//   return num * factorial(--num);
// }
// console.log(factorial(5));

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArray([3]));
