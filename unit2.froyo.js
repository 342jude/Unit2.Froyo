// create an empty array
const flavors = [];
// typing in a prompt upon entering a website
let input = prompt(
  "Please provide your Frozen Yogurt flavours, separated by commas",
  "strawberry,vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
//The user's input string is split into an array of strings.
const flavorStrings = input.split(",");
//console.log(flavorStrings);

// function that returns an object

function frozenYorgut(tastyFlavors) {
  // object to keep count of how many orders
  let flavorCount = {};
  // A loop is used to iterate through the array of flavors.
  for (const flavorString of flavorStrings) {
    if (flavorString in flavorCount) {
      flavorCount[flavorString]++;
    } else {
      flavorCount[flavorString] = 1;
    }
  }
  return flavorCount;
}
console.table(frozenYorgut(flavorStrings));
