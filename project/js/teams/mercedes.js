const btnmerc = document.querySelector('.btnmerc');
const outputmerc = document.querySelector('.outputmerc');
const urlmerc = 'https://ergast.com/api/f1/current/Constructors.json'

btnmerc.onclick = ()=>{
  outputmerc.innerHTML = 'Connecting...';
  getDatamerc();
}

function getDatamerc(){
  fetch(urlmerc)
  .then(rep => rep.json())
  .then(data => {
      console.log(data);
  })
}

function outDatamerc(val){
  console.log(val);
  let html = '';
  val.forEach((ele,ind) =>{
      console.log(ele);
      html += `<div> #${ind+1}. 
      
        </div>`;
  })
  outputmerc.innerHTML = html;
}