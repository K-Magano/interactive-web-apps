const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof Number  === primaryPhone
const secondaryValid = typeof Number === secondaryPhone



if (typeof primaryPhone == Number)
console.log('Primary phone is valid numerical string:', primaryValid)

if (typeof secondaryPhone == Number)
console.log('Primary phone is valid numerical string:', secondaryValid)

//console.log(parseInt(primaryPhone, 10))// ** returns NaN
//console.log(parseInt(secondaryPhone, 10)) //** returns number 


