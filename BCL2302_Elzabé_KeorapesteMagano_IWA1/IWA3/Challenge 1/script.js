

// scripts.js
//**Company and year needed to be in {} and .js at the end of configure.
import { company } from './config.js'
import { year } from './config.js' 



 const message = document.getElementById("footer")
 message.innerText =  company + " " + year //This was hard 😥
//**Had to add an id of Footer in the HTML so that i can reload and fetch using getElementbyID */


//!Original

/**
 * const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message*/
 

 









