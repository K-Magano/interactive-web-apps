const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
//const sarahBalance = '-4582.21000111' Two sarah Balances
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
const sarahBalance = '-5'

// Only change below this line
const leo = {

	name: leoName,
	balance: leoBalance,
    age: 24,
	accessId :  '47afb389-8014-4d0b-aff3-e40203d2107f',

    address: {
		leoNumber,
		leoStreet,
		leoPostal
	},
	
}

const sarah = {
   
	name: sarahName + sarahSurname,
    balance: sarahBalance,
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',

    address: {
		sarahNumber,
		sarahStreet,
		sarahPostal
	},
 }
console.log(leo) //address is on one line 
console.log(sarah)//address looks like address if i sarah.address it shows two address

