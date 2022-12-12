const btn2 = document.querySelector('.btn2');
const output2 = document.querySelector('.output2');
const url2 = 'https://ergast.com/api/f1/current/constructorStandings.json'

btn2.onclick = ()=>{
    output2.innerHTML = 'Connecting...';
    getData2();
  }

function getData2(){
    fetch(url2)
    .then(rep => rep.json())
    .then(data => {
        outData2(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
    })
}

function outData2(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += `<div id="grid"><div id="bungee">#${ind+1}. ${ele.Constructor.name}</div>
         <u><b>Points:</b></u> <i>${ele.points}</i>... <u><b>Season Wins:</b></u> <i>${ele.wins}</i></div>`;
    })
    output2.innerHTML = html;
}