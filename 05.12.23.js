//Is the string uppercase?
//Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.valueOf().toUpperCase() === this.valueOf();
}

//When you call isUpperCase() on a string, it first gets the string value using this.valueOf();
// Then -> converts this string value to all uppercase letters using the toUpperCase() method;
// Finally -> it compares the uppercase version of the string to the original string value. If they are the same, then the original string was already in all uppercase letters, and isUpperCase() returns true. Otherwise, it returns false.