function checkCamelCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}
console.log(checkCamelCase("heLLOssssRTssOITss"));
