//Valid Phone Number
//Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

function validPhoneNumber(phoneNumber){
  const validFormat = /^\(\d{3}\) \d{3}-\d{4}$/ //can use different non-regex methods like checking 
  //string length, changing parameter to a number, charAt, etc. but checked Regex format (since this i
  //is a regex Codewars)
  return validFormat.test(phoneNumber) //test = like a 'quick, easier' conditional 
 }
 
 //note:worked with Jada + Ashley
 
 
 //original thought process/ initial format:
 //  console.log(phoneNumber)
 //   let isItValid = `${phoneNumber}`
 //   if(phoneNumber == isItValid){
 //     return true
 
 
 //(some) PREP:
 //parameters: phoneNumber (123) 456-7890
 //return: true IF # is in right format (first one logged already is, 2nd is not) BUT in strings
 //example: "(123) 456-7890"  => true OR "(1111)555 2345"  => false
 //pseudo-code: 1. console logged parameter 2. create variable that sets the valid # 3. methods' stack or regex? 4. conditional?
 //5. return true OR false pending parameter being met as valid 