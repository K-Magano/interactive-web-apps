const leoName = 'Leo'
const leoSurname = 'Musvaire    '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(leoBalance*-1 +  sarahBalance*-1)
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
//!!what I am getting
/* With parseInt the number was whole and did not add the decimals 
----------------------------------
   Total amount owed:  R13976.00 
----------------------------------
*/

//!Expected OutCome

/*Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
----------------------------------*/ 