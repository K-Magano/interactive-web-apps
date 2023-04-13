firstName = 'John';
age = 35;
hobby = 'Coding';


//Arrow Function Expression
const logTwice = (parameter) => { //guess work, saw it in the lecture video
  console.log(parameter)//added .log
  console.log(parameter)
}

// Function Declaration
function newHobby () {//is this not re-declaring?
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)//not name but firstName
  return logTwice
}

newHobby()// redefined hobby to prevent re-declaration 


//!OutComes : Hello, John (35). I love coding!
