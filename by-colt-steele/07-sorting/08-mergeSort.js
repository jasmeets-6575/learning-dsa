function mergeSort(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr1[j]);
      j++;
    }
  }
}

console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));
