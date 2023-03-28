

// scripts.js
//**Company and year needed to be in {} and .js at the end of configure.
import { company } from 'configuration.js'
import { year } from 'configuration.js' 

const message = '© ' + company + ' (' + year + ')'
const msg = document.querySelector('footer').innerText = message
 
 console.log(msg)








