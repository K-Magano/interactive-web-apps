//line 1 &2 changed (:) to (=)
let year = 2050  // changed (:) to (=) & date to year
let status =  "student"
let count = 0




if (year = 2050) 
{
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	 count += 4 // (+=) is the same as count = +4
              
	if (status === "student") { // *The (===) operator will not do the conversion,  so if two values are not the same type === will simply return false . */
	  console.log('June', 'Youth Day')
		 count = count + 1
  }



	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'//date
	console.log(date, 'Day of Reconciliation')
	 count = count + 3
                      
	if (status === "parent") {
	  console.log(date, 'Christmas Day')
		 count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	   count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', year) //changed date to year so I can get this outcome
console.log('The total holidays is:', count)
