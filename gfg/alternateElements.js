function alternateElements(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result.join(" ");
}

console.log(alternateElements([1, 2, 3, 4]));
