function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("Awes"));

console.log("bc" + "a");
