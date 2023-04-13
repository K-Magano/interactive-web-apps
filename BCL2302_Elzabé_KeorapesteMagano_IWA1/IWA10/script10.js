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
        date: new Date(`1 April ${currentYear}`),
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

/*if (holidays =<8) {
    console.log([]) 
    } else if(9){console.log(`ID {futureId} not created yet`)}*/

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
let hours = minutes*60
let minutes = 1000*60

// gives you your current X-Mas date

if (isEarlier) copied = correctDate
console.log('ID change:', holidays[christmas].id == copied.id )//|| copied.id)
console.log('Name change:', holidays[christmas].name )//== copied.name || copied.name)

console.log(`Date change: ${(new Date(`25 December ${currentYear}`).toLocaleDateString('en-NZ'))}`);

//Converting [0] into a date from a string
let stringdate =  `16 December ${currentYear}`
let numberDate = new Date(stringdate + "Z")
holidays[0].date = new Date(`stringdate "Z" ${currentYear}`)

console.log(holidays[0])
const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)


const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,//This is a string
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)



const firstDay = firstHolidayTimestamp.getDate()
const firstMonth = firstHolidayTimestamp.getMonth()
const lastDay = lastHolidayTimestamp.getDate()
const lastMonth = lastHolidayTimestamp.getMonth()

/*
function getRandomDate(firstDay, lastDay) {
    const minValue = firstDay.getTime();
    const maxValue = lastDay.getTime();
    const randomHoliday = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    return new Date(timestamp);
}

console.log(getRandomDate(new Date(), new Date()));*/


console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)

console.log(getRandomDate());
//!Outcome
/*
ID change: false
Name change: X-mas
Date change: 25/12/2023*/