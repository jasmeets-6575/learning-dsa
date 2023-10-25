function longestName(names) {
  let indexArr = [];
  for (let i = 0; i < names.length; i++) {
    indexArr.push(names[i].toString().length);
  }
  let maxLength = Math.max(...indexArr);
  let index = names.find((item) => item.length === maxLength);
  return index;
}

console.log(longestName([3, "abc", "cb", "a"]));
