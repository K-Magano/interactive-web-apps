const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');


const biscuits1 = order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');


const biscuits2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count');
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

const biscuits3 = order3.querySelector('.biscuits .count');
const donuts3 = order3.querySelector('.donuts .count');
const pancakes3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');

biscuits1.textContent = order1.dataset.biscuits;
donuts1.textContent = order1.dataset.donuts;
pancakes1.textContent = order1.dataset.pancakes;
status1.textContent = order1.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits2.textContent = order2.dataset.biscuits;
donuts2.textContent = order2.dataset.donuts;
pancakes2.textContent = order2.dataset.pancakes;
status2.textContent = order2.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits3.textContent = order3.dataset.biscuits;
donuts3.textContent = order3.dataset.donuts;
pancakes3.textContent = order3.dataset.pancakes;
status3.textContent = order3.dataset.delivered === "true" ? "Delivered" : "Pending";



================================option two=================================================

// Select the elements using querySelector() and the data-key attribute
const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

// Get the relevant data attributes from each element
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

// Select the relevant elements inside each order element using querySelector()
const order1BiscuitsElem = order1.querySelector('.biscuits .count');
const order1DonutsElem = order1.querySelector('.donuts .count');
const order1PancakesElem = order1.querySelector('.pancakes .count');
const order1StatusElem = order1.querySelector('.status dd');

const order2BiscuitsElem = order2.querySelector('.biscuits .count');
const order2DonutsElem = order2.querySelector('.donuts .count');
const order2PancakesElem = order2.querySelector('.pancakes .count');
const order2StatusElem = order2.querySelector('.status dd');

const order3BiscuitsElem = order3.querySelector('.biscuits .count');
const order3DonutsElem = order3.querySelector('.donuts .count');
const order3PancakesElem = order3.querySelector('.pancakes .count');
const order3StatusElem = order3.querySelector('.status dd');

// Set the text content of each element to the retrieved data
order1BiscuitsElem.textContent = order1Biscuits;
order1DonutsElem.textContent = order1Donuts;
order1PancakesElem.textContent = order1Pancakes;
order1StatusElem.textContent = order1Delivered === 'true' ? 'Delivered' : 'Pending';

order2BiscuitsElem.textContent = order2Biscuits;
order2DonutsElem.textContent = order2Donuts;
order2PancakesElem.textContent = order2Pancakes;
order2StatusElem.textContent = order2Delivered === 'true' ? 'Delivered' : 'Pending';

order3BiscuitsElem.textContent = order3Biscuits;
order3DonutsElem.textContent = order3Donuts;
order3PancakesElem.textContent = order3Pancakes;
order3StatusElem.textContent = order3Delivered === 'true' ? 'Delivered' : 'Pending';
