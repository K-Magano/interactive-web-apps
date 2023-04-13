// script.js
//made the Functions Arrow Function Expression


//Defining the multiply function
const add = (a, b ) => { a + b 
	console.log( a + b)
	
}
// Defining the multiply function
const multiply = (a, b) => { a * b 
	console.log( a * b) 
}

//Defining the internal function
const internal = () => {
	const added = this.added(this.a, this.b)
	const multiply = this.multiplied(this.a, this.b)
	return this
}

/*function internal(obj) {
	const added = add(obj.a, obj.b);
	const multiplied = multiply(obj.a, obj.b);
	return obj;
}*/


// Not allowed to change below this

const example1 = {
	/*object*/internal: { //internal: { a: 2, b: 4, c: 8 },
			  a: 2,
			  b: 4,
			  c: 8,
	},
	add, //2+4 +
	multiply,//4*2 = 
  calculate: internal 
}

const example2 = {
	internal: { //internal: { a: 2, b: 2, c: 3 },
		a: 2,
		b: 2,
		c: 3,
	},
	add,//(2+2) +
	multiply,//2*2 = 12
  calculate: internal
}

example1.calculate() //calculate: [Function: internal]
example2.calculate()