let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.values(instructor));
console.log(Object.entries(instructor));
Object.keys(instructor).map((key) => console.log(key));
