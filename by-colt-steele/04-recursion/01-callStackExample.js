function takeShower() {
  return "Showering!";
}
function eatbreakfast() {
  let meal = cookFood();
  console.log(meal);
  return `Eating ${meal}`;
}
function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatbreakfast();
  console.log("Ok ready to go to work!");
}
wakeUp();
