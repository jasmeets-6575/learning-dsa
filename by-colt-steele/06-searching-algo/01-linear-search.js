function linearSearch(arr, num) {
  //   for (i = 0; i < arr.length; i++) {
  //     if (arr[i] === num) {
  //       return i;
  //     }
  //   }

  return arr.indexOf(num);
}

console.log(linearSearch([10, 2, 30, 40, 5], 40));
