function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(["Steel", "Cold", "DSA", "algorithms"].sort(compareByLen));
