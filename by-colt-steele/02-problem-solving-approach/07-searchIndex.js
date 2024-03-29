// function searchIndex(arr, val) {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       temp = i;
//     } else {
//       temp = -1;
//     }
//   }
//   return temp;
// }

// console.log(searchIndex([1, 3, 7, 2, 9, 4], 8));

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(search([1, 3, 4, 6, 7, 8, 9], 8));
