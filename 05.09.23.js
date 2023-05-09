//Highest and Lowest
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
  console.log(numbers)
    let organized = numbers.split(' ').map(Number)
    return `${Math.max(...organized)} ${Math.min(...organized)}`
  }
  
  //PREP
  //parameter: numbers
  //return: returning highest and lowest number separated by a single space, highest number first
  //example: return 5 1
  //pseudo-code: 1. console logged numbers to check the # sequence present (mix of positive and negative integers)
  //2. thinking of using sorting, considering highest # will get returned first? 3. change string to just numbers, and then manipulate that to return it the way I want it to? 4. math min, math max to wrap up? 5. return it 