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

const taxAsDecimal = parseInt(tax[913]) / 100 //tax is 12%
const startingAfterTax = salary *(1- taxAsDecimal)
const type = `${lodging}  ${size}`
const balance = (startingAfterTax - rent["large-apartment"] - expenses.food - expenses.transport)
console.log(`R ${balance.toFixed(2)}`)


 //!Expected 2685.25

 //* What I get R 2658.05