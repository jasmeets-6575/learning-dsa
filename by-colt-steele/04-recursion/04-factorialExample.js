function factorialExample(num) {
  if (num === 1) return 1;
  return num * factorialExample(num - 1);
}

console.log(factorialExample(4));

// function factorialExample(num) {
//   let total = 1;
//   for (let i = 1; i < num; i++) {
//     total += total * i;
//   }
//   return total;
// }

// console.log(factorialExample(4));

// function factorialExample(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }

// console.log(factorialExample(4));
