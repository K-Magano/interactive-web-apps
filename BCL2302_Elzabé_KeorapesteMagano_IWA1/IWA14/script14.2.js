// Function Declaration
function add(a, b) {
	return a + b;
	
  }
  
   
  function multiply(add, b) {
	return add * b;
  }
  
 /* It is a function named "internal" that performs some mathematical operations on the properties "a" and "b" of an object called "internal". 
  The function calls two other functions, "add" and "multiply", to calculate the added and multiplied values of "a" and "b". 
  Finally,  the function returns the result of multiplying the added and multiplied values.*/
  
  function internal() {//this acts like a for loop 
	const added = this.add(this.internal.a, this.internal.b);
	const multiplied = this.multiply(added, this.internal.c);
	console.log(multiplied)
  }
  

  const example1 = {
	internal: { 
	  a: 2, 
	  b: 4,
	  c: 8,
	},
   add,
   multiply,
   calculate: internal 
   }
  
  const example2 = {
	internal: {
	  a: 2,
	  b: 2,
	  c: 3,
	},
	add,
	multiply,
	calculate: internal } 
	
	const example3 = {
	internal: {
	  a: 10,
	  b: 10,
	  c: 10, 
	},
	add,
	multiply,
	calculate: internal}
  
  example1.calculate(); // should log 48
  example2.calculate(); // should log 12
  example3.calculate();// should log 200
  (this)
 

 