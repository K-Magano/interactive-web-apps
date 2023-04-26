//! Loading... should be swapped out with the value from the data attributes.

//! querySelector :

 /*  allows you to select elements in a web page using a CSS selector. 
  it returns the first element that matches the selector to manipulate the Document Object Model
  and interact with the content of a web page.*/

//!.getAttribute

/*Allows you to get the value of a specific attribute of an HTML element.
 It can return the value of the specified attribute as a string. 
 e.g 'data- biscuits" returns the value '5'
*/
/*Grouped all the similar objects together before calling each one.
* declaration can't start with a number so i swapped them around during declarations
*/


// Select the elements using querySelector() and the data-key attribute
//!<dl> and data keys can't be seen on the front-end
const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

// Get data using geAttribute() from each element
const order1Biscuits = order1.getAttribute('data-biscuits');
const order1Donuts = order1.getAttribute('data-donuts');
const order1Pancakes = order1.getAttribute('data-pancakes');
const order1Delivered = order1.getAttribute('data-delivered');

const order2Biscuits = order2.getAttribute('data-biscuits');
const order2Donuts = order2.getAttribute('data-donuts');
const order2Pancakes = order2.getAttribute('data-pancakes');
const order2Delivered = order2.getAttribute('data-delivered');

const order3Biscuits = order3.getAttribute('data-biscuits');
const order3Donuts = order3.getAttribute('data-donuts');
const order3Pancakes = order3.getAttribute('data-pancakes');
const order3Delivered = order3.getAttribute('data-delivered');

// Used 'Elm' to Select the elements inside each order element 
/*.count is in the <dd> called it using dot.notations */
const order1BiscuitsElem = order1.querySelector('.biscuits .count');
const order1DonutsElem = order1.querySelector('.donuts .count');
const order1PancakesElem = order1.querySelector('.pancakes .count');
/*Status doesn't have a class name so we called using the element  */
const order1StatusElem = order1.querySelector('.status dd');

const order2BiscuitsElem = order2.querySelector('.biscuits .count');
const order2DonutsElem = order2.querySelector('.donuts .count');
const order2PancakesElem = order2.querySelector('.pancakes .count');
const order2StatusElem = order2.querySelector('.status dd');

const order3BiscuitsElem = order3.querySelector('.biscuits .count');
const order3DonutsElem = order3.querySelector('.donuts .count');
const order3PancakesElem = order3.querySelector('.pancakes .count');
const order3StatusElem = order3.querySelector('.status dd');


/*start adding text(the values) using (.textContent). 
order1BiscuitsElem represents an element in the DOM. 
and has a textContent that can be used to call the text content of the specific element.

*/
order1BiscuitsElem.textContent = order1Biscuits;
order1DonutsElem.textContent = order1Donuts;
order1PancakesElem.textContent = order1Pancakes;

//!Ternary operator 
/*condition(true) ? value1 (Delivered): value2 (pending).

easier to use IF statement : 
if (order1Delivered === 'true') {
  order1StatusElem.textContent = 'Delivered';
} else {
  order1StatusElem.textContent = 'Pending';
}

*/
order1StatusElem.textContent = order1Delivered === 'true' ? 'Delivered' : 'Pending';

order2BiscuitsElem.textContent = order2Biscuits;
order2DonutsElem.textContent = order2Donuts;
order2PancakesElem.textContent = order2Pancakes;
order2StatusElem.textContent = order2Delivered === 'true' ? 'Delivered' : 'Pending';

order3BiscuitsElem.textContent = order3Biscuits;
order3DonutsElem.textContent = order3Donuts;
order3PancakesElem.textContent = order3Pancakes;
order3StatusElem.textContent = order3Delivered === 'true' ? 'Delivered' : 'Pending';
