//Is your period late?
//n this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false

function periodIsLate(last, today, cycleLength) {
  const numberOfDays = (today - last) /86400000 //had to look up: this is the milliseconds in a day
  if(numberOfDays > cycleLength){
    return true;
  }else{
    return false;
  }
  
}

//PREP
//parameters: last, today, cycleLength (28)
//return: true if last [# of days passed] today > cycleLength - AKA if its been 29 days, its greater than cycleLength so true
//example: see AKA above
//pseudocode: 1. create function 2. pass parameters mentioned 3. create variable 4. subtract last and today (read: # of days 'between' stated in problem) 5. how to know 
//if number of days passed - how much time is in a day? 6. conditional 7. return true or else is false 