//Returning strings
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


function greet(name){
  console.log(name)
  let personalizedGreeting = `${name}`
  let greet = `Hello, ${personalizedGreeting} how are you doing today?`
  return greet
}

//PREP:
//parameters: name, which I console logged: 'Ryan'
//return: greeting with the name 
//example: "Hello, <name> how are you doing today?"
//pseudocode: 1. console logged name 2. create a variable for greet to embed the greeting 3. template literal
//(?) 4. return it 