const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111' 
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
//const sarahBalance = '-5' Two sarah Balances

// Only change below this line
const leo = {

	Name: leoName,
	Balance: parseInt(leoBalance*-1),//ParseInt to convert string to number *-1 to make the number a positive
    Age: 24,
	AccessId :  '47afb389-8014-4d0b-aff3-e40203d2107f',
 
    Address: { // I want to add line breaks to no luck
		leoNumber,
		leoStreet,
		leoPostal
	},


	
}
let currency = "R"
const sarah = {
   
	Name:` ${(sarahName).trim()} ${sarahSurname}`,
	Balance:`${currency} ${parseInt(sarahBalance*-1)}`,
	Age: 62,
	AccessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',

    address: {
		sarahNumber,
		sarahStreet,
		sarahPostal
	},
 }
console.log(`Name: ${leo.Name}\nBalance: ${leo.Balance}\nAge:${leo.Age}\nAccessId: '${leo.AccessId}' \n\nAddress:  {\n  Number: ${leo.Address.leoNumber}\n  Street: ${leo.Address.leoStreet}\n  Postal:${leo.Address.leoPostal} }` ) 


console.log(sarah)