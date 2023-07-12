function checkString(str) {
  const firstIndex = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) !== firstIndex) {
      return false;
    }
  }
  return true;
}
console.log(checkString("gghgg"));
console.log(checkString("ggggg"));
