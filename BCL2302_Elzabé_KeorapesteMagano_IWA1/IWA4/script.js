let date =  " " //line 1 &2 changed (:) to (=)
let year = 2050
let status =  'student'
let count = 0

//const countS = 4//Students number of holidays
//const countP =  3 //Parents number of holidays



if (date = " ") 
{
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	 count = count + 4
              
	if (status === "student") { // (===)  compares the values as well as the data types of the operands.
	  console.log('June', 'Youth Day')
		 count = count + 1
  }



	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	 count = count + 3
                      //line 22 & 26 gave "count" the value "count1" to avoid declaring
	if (status === "parent") {
	  console.log(date, 'Christmas Day')
		 count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	   count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', year)
console.log('The total holidays is:', count)
