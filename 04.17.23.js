//string repeat
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  return s.repeat(n);
}

//grasshopper - gradebook
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  let averages = (s1 + s2 + s3) /3
  if (averages >= 90){
    return "A"
  } else if (averages >= 80){
    return "B"
  } else if (averages >= 70){
    return "C"
  } else if (averages >= 60){
    return "D"
  } else{
    return "F"
  }
  }