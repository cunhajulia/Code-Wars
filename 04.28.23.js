//Be Concise IV - Index of an element in an array
//Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

function find(a, e) {
  return a.includes(e) ? a.indexOf(e) : "Not found";
}

//original solution (which was too long- character max was 85 for this problem):
//  const index = array.indexOf(element)
//   return index === -1 ? "Not found" : index