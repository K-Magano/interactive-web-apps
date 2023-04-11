let state = 'idle'
let user = null
let calculated = '1'

//! Only allowed to change below

const logCalc = () => { //assigned logCalc as a function by swapping the word and =
    const isString = typeof calculated === 'string' //here we are comparing the type of. there are 7 'TypeOf's and in this case calulated is a string
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated
    calculated = calculatedAsNumber + 1 // assigned calculated with (=)instead of compare (===)
}

const calcUser = () => {//assigned calcUser as a function by swapping the word and =
  logCalc()// calling the logCal function by adding the brackets
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {//assigned checkUser as a function by swapping the word and =
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`)
  }
}


//! Only allowed to change code above
checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
