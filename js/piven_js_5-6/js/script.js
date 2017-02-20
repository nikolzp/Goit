var start = document.querySelector('.start');

function pause() {
	if (start.innerHTML == "Start") {
		start.innerHTML = "Pause";
		timer = setInterval(milis);
	} else {
		start.innerHTML = "Start";
		clearInterval(timer);
	}

}
start.addEventListener('click', pause);


var clear = document.querySelector('.clear');
function stop() {
	start.innerHTML = "Start";
	clearInterval(timer);
	milisec.innerHTML = 0;
	sec.innerHTML = 0;
	min.innerHTML = 0;
	timerMilisec = 0;
	timerSec = 0;
 	timerMin = 0;
}
clear.addEventListener('click', stop);

var timerMilisec = 0;
var timerSec = 0;
var timerMin = 0;
var milisec = document.querySelector('.milisec');
var sec = document.querySelector('.sec');
var min = document.querySelector('.min');

function milis(){
	milisec.innerHTML = timerMilisec;
	sec.innerHTML = timerSec;
	min.innerHTML = timerMin;
	timerMilisec++;
	if (timerMilisec === 1000) {
		timerMilisec = 0;
		timerSec++;
	} else {
		if (timerSec === 60) {
			timerSec = 0;
			timerMin++;
		}
	}
}
