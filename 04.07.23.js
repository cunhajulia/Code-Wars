//Removing Elements
//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  return arr.filter( (x, i) => i % 2 === 0)
}