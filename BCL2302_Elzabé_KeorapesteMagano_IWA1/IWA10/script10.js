const currentYear = new Date().getFullYear()
const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 May ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
     },
     5: {
         id: 5,
         name: 'Heritage Day',
         date: new Date(`24 September ${currentYear}`),
     },
     6: {
         id: 6,
         name: 'Christmas Day',
         date: new Date(`25 December ${currentYear} 13:25`),
     },
     7: {
         id: 7,
         name: 'Youth Day',
         date: new Date(`16 June ${currentYear}`),
     },
     8: {
         id: 8,
         name: 'Human Rights Day',
         date: new Date(`21 March ${currentYear}`)
     },
 }

 const christmas = 6
 const futureId = 9
 // Do not change code above this comment
 if (9) {
 console.log(`ID {futureId} not created yet`) 
 }
 //Changing christmas to X-mas: 
 holidays[6].name = "X-mas"

//Changing christmas time to midnight
holidays[6].date = new Date(`25 December ${currentYear}` )

//checking if new date is earlier than current date
const isEarlier =  new Date(`25 December ${currentYear} 13:25`)
const  correctDate = new Date (`25 December ${currentYear}` )
//console.log(`New date is earlier: ${isEarlier > correctDate}`)

//Setting date
let copied = holidays[6].name
copied == { name: 'X-mas Day' }
correctDate == copied.date

// gives you your current X-Mas date

if (isEarlier) {copied = correctDate}
console.log('ID change:', holidays[christmas].id === copied.id )
console.log('Name change:', holidays[christmas].name == copied.name || holidays[christmas].name)
console.log(`Date change: ${(new Date(`25 December ${currentYear}`).toLocaleDateString('en-NZ'))}`);

//Converting [0] into a date from a string
let dayOfReconciliation =  holidays[0]
dayOfReconciliation = new Date(`16 December ${currentYear}`)

console.log(dayOfReconciliation.toLocaleDateString('en-NZ'))

//!FAILED: Trying to understand the Random generator 

const firstHolidayDate = new Date(firstHolidayTimestamp).toLocaleDateString('en-ZA');
const lastHolidayDate = new Date(lastHolidayTimestamp).toLocaleDateString('en-ZA');

console.log(`First Holiday: ${firstHolidayDate}`);
console.log(`Last Holiday: ${lastHolidayDate}`);

function getRandomDate(min, max) {
  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
}

console.log(`Random Holiday Date: ${randomHolidayDate}`);




