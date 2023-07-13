function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
