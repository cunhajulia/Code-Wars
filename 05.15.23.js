//Did she say hello?
//You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
  console.log(greetings)
    const duolingo ={
      english: 'hello',
      italian: 'ciao',
      french: 'salut',
      german: 'hallo',
      spanish: 'hola',
      czech: 'ahoj',
      polish: 'czesc'
    }
    greetings = greetings.toLowerCase()
    for(let greeting of Object.values(duolingo))
      if(greetings.includes(greeting)){
        return true
      }
    return false
  }
  
  //PREP:
  //parameter: greetings in diff languages
  //return: confirmation that hello is in a diff language?
  //example: return true if hello is there or false
  //pseudocode: 1. console logged greetings 2. put in all hello's in the function to then call it ? 3. conditional
  //return true or false 