//Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
   return (flower1 + flower2) % 2 === 1;
}
lovefunc(1, 4);  // true
lovefunc(2, 4);  // false

//You Can't Code Under Pressure #1
//Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  i *= 2;
  return i;
}
