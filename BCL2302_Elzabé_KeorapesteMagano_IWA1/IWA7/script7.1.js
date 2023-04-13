/**
 * Three is a string thats why its concatenating and not adding changed 3 to a string 
 * I could have just removed the (' ')
 */

const value = parseInt('3') 
console.log(value + 4 + value)


/** 
 * (=) used to assign a value to a variable.
 * (==) compares two values for equality after converting their data types if necessary
 * *e.g 5 == '5' is true because the comparison is done after converting the string '5' to the number 5.
 * (===) also compares two values for equality, but it does not perform any type conversion,
 * (===) It is More strict and can prevent unexpected behavior
 * * e.g  5 === '5' would return false because the types are different.
 */