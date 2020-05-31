
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}
function findKeyByValue(objects, value){
for (const property in bestTVShowsByGenre) {
    if(objects[property]===value) return property;
}
}
console.log(findKeyByValue(bestTVShowsByGenre, "drama"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '7c0s Show"));