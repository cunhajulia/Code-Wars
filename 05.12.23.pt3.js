//Reversed Words
//Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

//PREP:
//parameter: str which is a sentence in this case "hello world!"
//return: that string reversed
//example: "And I oop" -> "oop I And"
//pseudocode: 1. console.log str 2. we know we have to return str ultimately, so 3. which methods to
//apply here? reverse is main but not only 1 4. console log just a reversal and see what you get 5. determine 
//next method 6. can we do the return & everything else all on the same line? (ideally)