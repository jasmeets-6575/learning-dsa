function findStartAndEndIndices(arr, key) {
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      startIndex = i;
      break;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === key) {
      endIndex = i;
      break;
    }
  }

  return [startIndex, endIndex];
}

// Example usage:
const arr = [3, 8, 5, 2, 8, 9, 4, 8];
const key = 8;
const [startIndex, endIndex] = findStartAndEndIndices(arr, key);

console.log(startIndex); // Output: 1
console.log(endIndex); // Output: 7
