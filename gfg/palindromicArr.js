function palindrom(arr) {
  for (let key in arr) {
    let elem = arr[key];
    let reversedElem = arr[key].toString().split("").reverse().join("");

    if (arr[key].toString() !== reversedElem) return false;
  }
  return true;
}

console.log(palindrom([111, 222, 333, 444]));
