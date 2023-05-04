const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

let  date = new Date()
       let currentYear = date.getFullYear();
       let currentMonth = date.getMonth();//get the date number 
         
  const renderCalender = () => {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    console.log(lastDateOfMonth)
    
  }

