//getNames()
//The following code is not giving the expected results. Can you debug what the issue is?

//function getNames(data){
//   return data.map(function(item){item.name});
// }

function getNames(data){
  return data.map(item=> item.name);
}
