function countUniqueValues(arr) {
  let values;
  if (arr.length < 1) {
    values = 0;
  } else {
    values = 1;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      values = (values || 0) + 1;
    }
  }
  return values;
}

console.log(countUniqueValues([-1, 1, 3, 3, 5, 4, 1]));
