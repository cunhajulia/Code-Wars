//The highest profit wins!
//Write a function that returns both the minimum and maximum number of the given list/array.

function compare(a, b){
  return a - b;
}
function minMax(arr){
  arr.sort(compare);
  console.log(arr);
  let min = arr[0]; //first number of array
  let max = arr[arr.length-1]; //last number of array
  return [min, max] //same as line below 
//   return [arr[0],arr[arr.length-1]]
}
