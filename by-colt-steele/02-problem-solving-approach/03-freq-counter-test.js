// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  let arr1 = Array.from(str1);
  let arr2 = Array.from(str2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("texttwissttime", "timetwisttexts"));
