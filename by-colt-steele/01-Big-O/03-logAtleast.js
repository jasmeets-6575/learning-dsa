// function logAtLeast(n) {
//   for (var i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtLeast(5)
function logAtMost(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
console.log(logAtMost);
