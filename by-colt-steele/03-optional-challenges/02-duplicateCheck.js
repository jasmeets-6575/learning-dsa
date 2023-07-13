function areThereDuplicates(...args) {
  const frequencyCounter = {};
  for (let element of args) {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
