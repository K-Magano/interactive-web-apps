
// any variables declared cannot start with a number 
//grouped all the things that look the same

//Replace ''Loading...' Wwith the js values 
const order1 = document.querySelector('[data-key="order1"]')
const order2 = document.querySelector('[data-key="order2"]')
const order3 = document.querySelector('[data-key="order3"]')
 
const biscuits1 = document.querySelector(".biscuits .count") 
const donuts1 = document.querySelector(".donuts .count") 
const pancakes1 = document.querySelector(".pancake .counts") 
const status1 = document.querySelector(".status ") 

const biscuits2 = document.querySelector(".biscuits .count") 
const donuts2 = document.querySelector(".donuts .count") 
const pancakes2 = document.querySelector(".pancakes .count") 
const status2 = document.querySelector(".status ") 
 
const biscuits3 = document.querySelector(".biscuits .count") 
const donuts3 = document.querySelector(".donuts .count") 
const pancakes3 = document.querySelector(".pancakes .count") 
const status3 = document.querySelector(".status  ") 

biscuits1 = order1.dataset.biscuits;
donuts1 = order1.dataset.donuts;
pancakes1 = order1.dataset.pancakes;
status1 = order1.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits2  = order1.dataset.biscuits;
donuts2  = order1.dataset.donuts;
pancakes2 = order1.dataset.pancakes;
status2=  order1.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits3 = order1.dataset.biscuits;
donuts3 = order1.dataset.donuts;
pancakes3 = order1.dataset.pancakes;
status3 = order1.dataset.delivered === "true" ? "Delivered" : "Pending";

document.getElementsByClassName("biscuits.p-count").textContent = status ? "3":"0"
document(biscuits.p-count).pending = 3-status ? 1-biscuits + 2-biscuits + 3-biscuits: 0
document(biscuits.p-count).delivered 3-status ? 0 : 1-biscuits + 2-biscuits + 3-biscuits

document(donuts.p-count).pending = 3-status ? 1-donuts + 2-donuts + 3-donuts: 0
document(donuts.p-count).delivered 3-status ? 0 : 1-donuts + 2-donuts + 3-donuts

document(pancakes.p-count).pending = 3-status ? 1-pancakes+ 2-pancakes+ 3-pancakes: 0
document(pancakes.p-count).delivered 3-status ? 0 : 1-pancakes+ 2-pancakes + 3-pancakes


















































































































