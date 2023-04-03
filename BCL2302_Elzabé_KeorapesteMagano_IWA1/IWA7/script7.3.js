const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const owed = parseInt( leoBalance*-1 + sarahBalance*-1)
const leo = (`${leoName} ${leoSurname}  ${leoBalance*-1}`)

const sarah = (`${sarahName} ${sarahSurname} ${sarahBalance*-1}`)
const total = (`Total amount: ${owed}: `)
const result = (`${leo}  ${sarah} ${owed}  ${divider}`)

console.log(result)

/*const total = (owed)
const resultS = (`${leo} ${sarah} ${divider}  ${owed} ${divider}`)
const result = (owed)
console.log(result.toFixed(2))* 
* only gave the number 
 / 

//!Expected OutCome

/*Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
----------------------------------*/

//could have ${total} and still got "Total amount owed:" but Total amount owed: ${owed}  still works