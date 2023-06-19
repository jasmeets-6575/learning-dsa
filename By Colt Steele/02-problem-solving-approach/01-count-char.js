// function charCount(str) {
//   // make object to return at end
//   var result = {};
//   // loop over string, for each character...
//   for (var i = 0; i < str.length; i++) {
//     // if the char is a number/ letter AND is a key in object, add one to count
//     var char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       // if the char is a number/ letter AND not in object , add it to object and set value to 1
//       else {
//         result[char] = 1;
//       }
//     }
//   }

//   // if character is something else (space, period, etc.) don't do anything
//   // return object at end
//   return result;
// }

function charCount(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      }
      else {
        result[char] = 1;
      }
    }
  }
  return result;
}

console.log(charCount("hello"));
console.log(charCount("Hello, hi there"));
