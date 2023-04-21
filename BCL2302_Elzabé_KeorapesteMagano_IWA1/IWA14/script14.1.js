const firstName = 'John';
const age = 35;
const hobby = 'Coding';


//Arrow Function Expression

const logTwice = (parameter/*argument*/) => { 
  console.log(parameter)//added .log
  console.log(parameter)
}

// Function Declaration
//redefined hobby to prevent re-declaration 
function newHobby () {//is this not re-declaring Hobby ?
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)//not name but firstName
  return logTwice
}

newHobby()


//!OutComes : Hello, John (35). I love coding! x2
