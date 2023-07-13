function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }

  const freq1 = {};
  const freq2 = {};
  for (let digit of str1) {
    freq1[digit] = (freq1[digit] || 0) + 1;
  }

  for (let digit of str2) {
    freq2[digit] = (freq2[digit] || 0) + 1;
  }

  for (let digit in freq1) {
    if (freq1[digit] !== freq2[digit]) {
      return false;
    }
  }

  return true;
}
console.log(sameFrequency(132, 213));
