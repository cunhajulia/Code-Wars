//Descending Order
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  console.log([n]) //check if it can return as an array
   return Number(n.toString().split('').sort(((a, b) => b - a)).join(''))
 }
 
 //main method is sort
 //split, sort, join 
 //note: you cannot use split on numbers because split is a string method and n = numbers. hence turning it into a string first 
 //and then applying the methods above 
 //remember: with sort(),the default sort order is ascending (and this codewars wants it descending)