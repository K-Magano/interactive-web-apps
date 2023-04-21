
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
const fragment = document.createDocumentFragment();


  const firstName = athlete.firstName;
  const surname = athlete.surname; 
  const races = athlete.races;
  const id = athlete.id; 
  const totalRaces = races.length;
  const latestRace = races[races.length -1];
  const [dateString] = latestRace.date.split('T');
const date = new Date(dateString);
const day = date.getDate();
const month = MONTHS[date.getMonth()];
const year = date.getFullYear();

  const[first, second, third, fourth] = latestRace.time;
  const totalTime = (first + second + third + fourth).toString();

  const hours =Math.floor (totalTime / 60).toString();
  const minutes = totalTime.split('T');
  const Time = `${hours}:${minutes}`;
// Create an HTML element to represent the athlete
const athleteElement = document.createElement('div');
athleteElement.classList.add('athlete');
athleteElement.dataset.id = athlete.id;
// Create a definition list to display the athlete's information
const list = document.createElement('dl');
  list.innerHTML = /* html */ `
    <dt><h2>Athlete:</h2>${athlete.id}</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${totalRaces}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${Time.padStart(4, '0') }</dd>
  `;
  athleteElement.appendChild(list);
  fragment.appendChild(athleteElement)
  return fragment;
};


document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(data.response.data.NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(data.response.data.SV782));


















/*
let sectionnw =  document.querySelector('[data-athlete="NM372"]')
let sectionsv =  document.querySelector('[data-athlete="SV782"]')

//Display the Data for Nwabisa Masiko.
const nwData = data.response.data.NM372

//created ID section.
const nwId = nwData.id;
const herIdHeading = document.createElement('h2')
const  nwIdText = document.createTextNode('nwId')
nwIdHeading.appendChild(nwIdText);
sectionnw.appendChild(nwIdHeading);

//First Name and Surname section.
const nwFirstName = nwData.firstName;
const nwSurname = nwData.surname;
const nwNameHeading = document.createElement('dt');
const nwNameText = document.createTextNode(`${nwFirstName} ${nwSurname}`);
nwNameHeading.appendChild(nwNameText);
sectionnw.appendChild(nwNameHeading);



//Calculate and Display latest race Date by defracturing.
//const { date, time } = nwDatedata;

//Total Races 
const nwTotalRaces = nwData.races.length;
const nwTotalRacesHeading = document.createElement('dt');
const nwTotalRacesText = document.createTextNode(`Total Races:${nwDatedata.time.length}`);
nwTotalRacesHeading.appendChild(nwTotalRacesText);
sectionnw.appendChild(nwTotalRacesHeading);

//Latest Date
const nwLatestRace = nwData.races[1];
const nwLatestRaceDate = new Date(nwLatestRaceData.date);
const nwLatestRaceDateHeading = document.createElement('dt');
const nwLatestRaceDateText = document.createTextNode(new Date(latestRaceData.date).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}));
nwLatestRaceDateHeading.appendChild(nwLatestRaceDateText)
sectionnw.appendChild(nwLatestRaceDateText);

//Display data for Schalk Venter
const svData = data.response.data.SV782

//created ID section.
const svId = svData.id;
const svIdHeading = document.createElement('h2')
const svIdText = document.createTextNode(svId)
svIdHeading.appendChild(svIdText);
sectionsv.appendChild(svIdHeading);

// Create first name and surname sections

const svFirstName = svData.firstName;
const svSurname = svData.surname;
const svNameHeading = document.createElement('dt');
const svNameText = document.createTextNode(`Athlete: ${svFirstName} ${svData.surname}`);
svNameHeading.appendChild(svNameText);
sectionsv.appendChild(svNameHeading);

//defracturing the races array
const { date, time } = svDatedata;

//Total Races 
const svTotalRaces = svDatedata.races.length
const svTotalRacesHeading = document.createElement('dt');
const svTotalRaceText = document.createTextNode(`Total Races:${svDatedata.time.length}`);
svTotalRaceText.appendChild(svTotalRaceText); 
sectionsv.appendChild(svTotalRacesHeading)

//Latest Date
const svLatestRace = nwData.races[1];
const svLatestRaceDate = new Date(svLatestRaceData.date);
const svLatestRaceDateHeading = document.createElement('dt');
const svLatestRaceDateText = document.createTextNode(new Date(latestRaceData.date).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}));
svLatestRaceDateHeading.appendChild(svLatestRaceDateText)
sectionsv.appendChild(svLatestRaceDateText);*/