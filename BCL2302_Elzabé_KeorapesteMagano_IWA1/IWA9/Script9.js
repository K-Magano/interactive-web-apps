const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,


}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
     none: 0,
        'small-room': 200,
        'small-house': 1200,
        'small-apartment': 400,
          'large-room': 300,
          'large-apartment': 800,
          'large-house': 2400,
   }

// You can change below however you want
const taxAsDecimal = 480 //parseInt(tax[913]) / 100 //tax is 12%
const startingAfterTax = salary  - taxAsDecimal
const type = lodging + size
let rooms = rent[`large-apartment`] //so i can get a number
const balance = (startingAfterTax - rooms - expenses.food - expenses.transport)
//const balance = (`${rent} ${type} ${expenses.food + expenses.transport}`) = [object Object] apartment  large 61.950100000000006
console.log(`R ${balance.toFixed(2)}`)


 //!2685.25