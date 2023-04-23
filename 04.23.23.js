//Greet Me
//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

let greet = function(name) {
  let hey = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  let all = `Hello ${hey}!`
  return all
};