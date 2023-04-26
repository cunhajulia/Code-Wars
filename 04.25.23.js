//Unexpected Parsing
//Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {
  let status = (isBusy ? "busy" : "available");
  {
    return {status: status} //noted the words 'key', telling me an obj will need to be present to be returned
  }
}
//function as it was was not using the variable "status" that it defines

//