function checkCamelCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
      count++;
    }
  }
  return count;
}
console.log(checkCamelCase("heLLOssssRTssOITss"));
