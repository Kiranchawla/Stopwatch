const hours=document.getElementById('hours');
const minutues=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const miliseconds=document.getElementById('miliseconds')
const timing=document.getElementById ('timing');
 let isRunning=false;
 let timer=null
 let startime=null;
 let timeIntervel=null;
 let elaspedtime=null;
function start(){
    if(!isRunning){
        startime=Date.now();
        timer=setInterval(update,10)
    isRunning=true;
}
}
function stop(){

     clearInterval(timer);
   

}
function reset(){

    clearInterval(timer);
    startime=0;
    elaspedtime=0;
    hours.textContent='00';
    minutues.textContent="00";
    seconds.textContent='00';
    miliseconds.textContent='00';

}

function update(){

    const currenttime=Date.now();
    const elaspedtime=currenttime-startime;
    let hour=Math.floor((elaspedtime)/(1000*60*60));
    let minutue=Math.floor(elaspedtime/(1000*60)%60);
    let second=Math.floor(elaspedtime/1000%60)
    let milliseconds=Math.floor(elaspedtime%1000/10)
    hours.textContent=hour;
    minutues.textContent=minutue;
    seconds.textContent=second;
    miliseconds.textContent=milliseconds;
    
}
  const setFavicon = (emoji) => {
  const canvas = document.createElement('canvas');
  canvas.height = 32;
  canvas.width = 32;

  const ctx = canvas.getContext('2d');
  ctx.font = '28px serif';
  ctx.fillText(emoji, -2, 24);

  const favicon = document.querySelector('link[rel=icon]');
  if (favicon) { favicon.href = canvas.toDataURL(); }
}

setFavicon('⏲️');