//L1: set alarm

//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 


function setAlarm(employed, vacation){
  if(employed && !vacation){
    return true
  }else{
    return false
  }
  }

  //Fake binary
  //Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

  function fakeBin(x){
    let outPut = ''
    for(let i = 0; i < x.length; i++)
      if(Number(x[i]) >= 5){
        outPut += '1'
      }else{
        outPut += '0'
      }
    return outPut 
  }