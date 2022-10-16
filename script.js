alert("hello world")
const startingMinutes = 10;
let time = startingminutes * 60;

const countdownEl= document.getElementbyId('countdown'); 

setInterval(updateCountdown,1000);

funtion updateCountdown(){
    
const minutes = Math.floor (time / 60) ;
let seconds=time % 60;
countdownEl.innerHTML='$(minutes):$(seconds)';
    time--;
}