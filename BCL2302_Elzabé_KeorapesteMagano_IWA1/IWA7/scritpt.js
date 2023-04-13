const leoName = 'Leo'
const leoSurname = 'Musvaire    '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
/**
 * Used parseFloat so i get get a decimal number
 * *-1 to the nameBalance to get a positive number 
 * .toFixed(2) for two Decimal places 
 * Removed the 'R'
 * Used interpolation for Leo, Sarah , total owed and results.
 * \n for new lines
 */
let owed = parseFloat(leoBalance*-1 +  sarahBalance*-1)

owed = parseFloat(leoBalance)*-1 +  parseFloat(sarahBalance)*-1

const leo = (`${leoName} ${(leoSurname).trim()} (Owed: R ${(leoBalance*-1).toFixed(2)})`)
const sarah = (`${(sarahName).trim()} ${sarahSurname}(Owed: R ${(sarahBalance*-1).toFixed(2)})`) //wanted to add .toFixed
const total = (`Total amount owed: `)
const result = (`${leo}\n${sarah} \n\n${divider}\n   ${total} R ${owed.toFixed(2)} \n${divider}`)
console.log(result)


//! What I get with parseFloat

/*Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans(Owed: R 4582.21) 

----------------------------------
   Total amount owed:  R 13976.21  //!How do i get the space in a number
----------------------------------

//!Expected OutCome

/*Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
----------------------------------*/ 