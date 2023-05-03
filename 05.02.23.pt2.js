//Remove First and Last Character Part Two
//This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(string){
  let tray = string.split(',')
  tray = tray.slice(1, -1) //without assigning our variable to slice, it would give us a newly sliced variable, rather than update our original one which is what we want 
  if(tray.length === 0){
    return null
  }
  return tray.join(' ') //don;t forget whitespace in between here! note that earlier we did split to remove the commas first thing
}

//PREP:
//parameters: string (I console logged it and it has random sequences .e.g A1, B2,1, 2, 3, etc.)
//return: a new string (map?) same sequences - first and last ones gone (pop for last?) and NO commas, just spaces.
//return NULL if doing the above will led to it becoming empty - ternary or conditional here?
//example: string = [1, 2, 3], shift for first, pop for last, replace(?) for whitespace,return [2], or [NULL]
//pseudo-code: 1. function created, string passed as parameter 2. create variable and assign string as its value
//3. confirm methods- split, pop, join, etc.?