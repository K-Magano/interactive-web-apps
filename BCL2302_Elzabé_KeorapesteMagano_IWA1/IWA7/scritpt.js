const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(leoBalance*-1 + sarahBalance*-1)
const leo = (`${leoName} ${leoSurname} (Owed R:${leoBalance*-1})`)
const sarah = (`${sarahName} (Owed R: ${sarahBalance*-1})`)
const total = (`Total amount owed `)
const result = (`${leo}\n${sarah}\n${divider}\n   ${total} R:${owed} \n${divider}`)
console.log(result)

//!!what I am getting
/*
Leo Musvaire (Owed R:9394)
Sarah (Owed R: 4582.21000111)
----------------------------------
   Total amount owed  R:13976 
----------------------------------*/

//!Expected OutCome

/*Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
----------------------------------*/