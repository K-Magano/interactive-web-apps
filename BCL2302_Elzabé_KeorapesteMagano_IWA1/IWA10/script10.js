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

 /* Used an if statement to check if 9 has been assigned a holiday \*/
if (holidays[futureId]) {
  console.log(`The holiday assigned to ID ${futureId} is ${holidays[futureId].name}.`);
} else {
  console.log(`ID ${futureId} not created yet.`);
}
 //Changing christmas to X-mas: by re-declaring the key 
 holidays[christmas].name = "X-mas"

//Changing christmas time to midnight by removing the 13:25  time
holidays[6].date = new Date(`25 December ${currentYear}` )

//checking if new date is earlier than current date
const isEarlier =  new Date(`25 December ${currentYear} 13:25`)
/**
 * correctDate is the changed date 
 */
const  correctDate = new Date (`25 December ${currentYear}` )
console.log(`New date is earlier: ${isEarlier > correctDate}`)

//Setting thr correct date
let copied = holidays[6].name
copied == { name: 'X-mas Day' }
correctDate == copied.date

// gives you your current X-Mas date

if (isEarlier) {copied = correctDate}
console.log('ID change:', holidays[christmas].id === copied.id )
console.log('Name change:', holidays[christmas].name == copied.name || holidays[christmas].name)
/**
 * changing the date format using ('en-NZ) to get dd/mm/yyyy)
 *  toLocaleDateString() returns the date based on the current locale (language and region settings).
 */
console.log(`Date change: ${(new Date(`25 December ${currentYear}`).toLocaleDateString('en-NZ'))}`);

//
/**
 * Converting day of reconciliation to a date 
 */
let dayOfReconciliation =  holidays[0]
dayOfReconciliation = new Date(`16 December ${currentYear}`)

console.log(dayOfReconciliation.toLocaleDateString('en-NZ'))

/**
 * !Math.min  return the smallest value e.g  Math.min(2, 5, 8)  = 2
 * !Math.max: maximum  Math.max(2, 5, 8)  = 8.
 * !new Date(): 
 * creates a Date object, for a specific date and time, using year, month, day, hour, minute, second, and millisecond.
 * !.getTime(): 
 * This is a method on Date objects in JavaScript that returns the number of milliseconds
 * !.padStart() and .padEnd(): 
 *  add zeros at the or end of a string to ensure the take up a  certain length. .
 */


//!FAILED: Trying to understand the Random generator 
let holidayDates = Object.values(holidays).map(h => h.date)
let firstHolidayDates = new Date(Math.min(...holidayDates))
let lastHolidayDates = new Date (Math.max(...holidayDates))

console.log(holidays[0].date.toLocaleString('en-NZ'))
console.log(holidays[8].date.toLocaleString('en-NZ'))


console.log(`First Holiday: ${firstHolidayDate}`);
console.log(`Last Holiday: ${lastHolidayDate}`);

function getRandomDate(min, max) {
  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
}

console.log(`Random Holiday Date: ${randomHolidayDate}`);

//log Math.random x (x)will return decimals.= then parseInt 
  then check whole number 
  use if statement 





