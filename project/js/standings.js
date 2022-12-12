const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const url = 'http://ergast.com/api/f1/current/driverStandings.json'

btn.onclick = ()=>{
  output.innerHTML = 'Connecting...';
  getData();
}

function getData(){
  fetch(url)
  .then(rep => rep.json())
  .then(data => {
      outData(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  })
}

function outData(val){
  console.log(val);
  let html = '';
  val.forEach((ele,ind) =>{
      console.log(ele);
      html += `<div id="grid"><div id="bungee">#${ind+1}. ${ele.Driver.givenName} 
      ${ele.Driver.familyName}</div><u><b>Points:</b></u> <i>${ele.points}</i>
       ... <u><b>Season Wins:</b></u> <i>${ele.wins}</i> ... 
      <u><b>Team:</b></u> <i>${ele.Constructors[0].name}</i> ... 
      <u><b>Nationality:</b></u> <i>${ele.Driver.nationality}</i></div>`;
  })
  output.innerHTML = html;
}
