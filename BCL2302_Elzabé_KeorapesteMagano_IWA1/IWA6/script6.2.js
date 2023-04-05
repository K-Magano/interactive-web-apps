const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

const expenses = transport + food + rent
const taxAsDecimal = 96 //const startingAfterTax = salary - taxAsDecimal*(1 - parseInt(tax) / 100 ) to do it the other way 
const startingAfterTax = salary  - taxAsDecimal

if (hourOfDay !==null && minuteOfDay !== null) {console.log("⚠️Error")}
else (hourOfDay === 00 && minuteOfDay === 00) 
    const balance = startingAfterTax - expenses 
   
   console.log(`R ${balance.toFixed(2)}`)


  //!My Value R 242.05