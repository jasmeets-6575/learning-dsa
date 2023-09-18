function bubbleSort(arr) {
  var noSwaps;
  for (var i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      console.log(arr);
    }
    if (noSwaps) break;
    console.log("end loop");
  }
  return arr;
}
console.log(bubbleSort([5, 3, 1, 4, 2]));
