//BASIC: Making Six Toast.

//Story:
//You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

function sixToast(num) {
  const expectedToast = 6;
  let difference = num - expectedToast;
  if (difference < 0) {
    difference = -difference;
  }
  return difference;
  
}

//Return to Sanity
//This function should return an object, but it's not doing what's intended. What's wrong?
//function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return 
//results;
// }

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

//Unfinished Loop - Bug Fixing #1
//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
//function createArray(number){
//   var newArray = [];

//   for(let counter = 1; counter <= number;){
  
//     newArray.push(counter);
//   }
//   return newArray;
// }

function createArray(number){
  var newArray = [];
  for(let counter = 1; counter <= number; counter ++){
    newArray.push(counter);
  }
  return newArray;
}