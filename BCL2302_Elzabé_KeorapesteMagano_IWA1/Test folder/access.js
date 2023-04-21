// Assign all elements
const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

// Change border of ID demo to purple
demoId.style.border = '1px solid purple';

// Change border of class demo to orange
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = '1px solid orange';
}

// Change border of tag demo to blue
for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = '1px solid blue';
}

// Change border of ID demo-query to red
demoQuery.style.border = '1px solid red';

// Change border of class query-all to green
demoQueryAll.forEach(query => {
  query.style.border = '1px solid green';
});


const list = document.createElement("dl");

const day = new Date(date).getDate();
const month = MONTHS[new Date(date).getMonth()];
const year = new Date(date).getFullYear();

const [first, second, third, fourth] = time;
const total = first + second + third + fourth;

const hours = Math.floor(total / 60);
const minutes = total % 60;

list.innerHTML = /* html */ `
  <dt>Athlete</dt>
  <dd>${firstName} ${surname}</dd>

  <dt>Total Races</dt>
  <dd>${races.length}</dd>

  <dt>Event Date (Latest)</dt>
  <dd>${day} ${month} ${year}</dd>

  <dt>Total Time (Latest)</dt>
  <dd>${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}</dd>`;

  fragment.appendChild(list);
}
  //return fragment;
;

const NM372 = document.querySelector(NM372).appendChild(createHtml(NM372));
const SV782 = document.querySelector(SV782).appendChild(createHtml(SV782));