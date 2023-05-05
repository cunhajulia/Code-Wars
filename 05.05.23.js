//Create Phone Number
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) { 
  let areaCode = numbers.slice(0, 3).join('')
  console.log(areaCode)
  let digits = numbers.slice(3,6).join('')
  console.log(digits)
  let last = numbers.slice(6,10).join('')
  console.log(last)
  const phone = `(${areaCode}) ${digits}-${last}`
  return phone 
}

//PREP
//parameters- numbers 
//return - phone number (see below)
//example - (111) 456-1111
//pseudocode - console logged numbers = an array; concat the numbers? slice first() (?) join() method at the end; 