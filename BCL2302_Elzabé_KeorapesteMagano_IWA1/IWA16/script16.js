// scripts.js

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
              date: '2022-11-18T22:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T22:00:00.000Z',//this date for display use length -1 or
              time: [6, 7, 8, 7], length - 1 to get the last one
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T22:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T22:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T22:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T22:00:00.000Z',//this date for display
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const {firstName, surname, id, races} = athlete;
      
//getting latest race
    const  latestRace = races[races.length -1]; 
  
//counting the number of races 
     
    let totalRaces = races.length;

    const list = document.createElement('dl');
//Change string date to a number format 'latest Date' to get (d/m/y)

  //Nwabisa 
  const nwabisaStringDate = '2022-12-02T22:00:00.000Z';
  const nString = new Date(nwabisaStringDate);
  const nwabisaformattedDate = (`${nString.getDate()} ${MONTHS[nString.getMonth()]} ${nString.getFullYear()}`);
  
              //console.log(nwabisaformattedDate);
  
  //Venter
   const schalkStringDate = '2022-12-09T22:00:00.000Z';
   const sString = new Date(schalkStringDate);
   const schalkFormattedDate = (`${sString.getDate()} ${MONTHS[sString.getMonth()]} ${sString.getFullYear()}`);
   
                     //console.log(schalkFormattedDate)
  
     
    const [first, second, third, fourth] = latestRace.time; 
    const total = first + second + third + fourth;
  
    const hours = Math.ceil(total / 60); //rounding off the number  
    const minutes = total % 60;// get the remaining minutes 
  

   
    list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>
    
    <dt>Total Races</dt>
    <dd>${totalRaces}</dd> 

    <dt>Event Date (Latest)</dt>
    <dd>${nwabisaformattedDate}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.padStart(2, 0)} ${minutes}</dd>
  `;
  list.innerHTML = /* html */ `
  <dt>Athlete</dt>
  <dd>${firstName} ${surname}</dd>
  
  <dt>Total Races</dt>
  <dd>${totalRaces}</dd> 

  <dt>Event Date (Latest)</dt>
  <dd>${schalkFormattedDate}</dd>

  <dt>Total Time (Latest)</dt>
  <dd>${hours.padStart(2, 0)} ${minutes}</dd>
`;

  }
   const [NM372, SV782] = data.
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782));



  ==============================================


  
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
  const { firstName, surname, id, races } = athlete;

  //getting latest race
  const latestRace = races[races.length - 1];

  //counting the number of races
  let totalRaces = races.length;

  const list = document.createElement('dl');

  //Change string date to a number format 'latest Date' to get (d/m/y)
  const latestDateString = latestRace.date;
  const latestDate = new Date(latestDateString);
  const latestFormattedDate = `${latestDate.getDate()} ${MONTHS[latestDate.getMonth()]} ${latestDate.getFullYear()}`;

  const [first, second, third, fourth] = latestRace.time;
  const total = first + second + third + fourth;

  const hours = Math.ceil(total / 60).toString().padStart(2, '0');
  const minutes = (total % 60).toString().padStart(2, '0');

  list.innerHTML += /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${totalRaces}</dd> 

    <dt>Event Date (Latest)</dt>
    <dd>${latestFormattedDate}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours}:${minutes}</dd>
  `;

  return list;
};

const NM372 = data.response.data["NM372"];
const SV782 = data.response.data["SV782"];

document.querySelector("NM372").appendChild(createHtml(NM372));
document.querySelector("SV782").appendChild(createHtml(SV782));
