//Calculate Average
//Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let reduction = 0;
    if(array.length === 0){
      return reduction;
      } else {
        reduction = array.reduce((a, n) => (a + n))
  return reduction / array.length;
}
  }