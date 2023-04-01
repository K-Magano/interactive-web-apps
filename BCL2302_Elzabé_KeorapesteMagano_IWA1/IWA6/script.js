const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof Number  === primaryPhone
const secondaryValid = typeof Number === secondaryPhone
 
if (primaryValid === Number.isInteger){
    console.log(primaryValid)}
 else {
    console.log('Primary phone is valid numerical string:', primaryValid)
}
 
if (secondaryValid === Number.isInteger){
    console.log(secondaryValid)}
    else
    {
    console.log('Secondary phone is valid numerical string:', secondaryValid)}
    
    
