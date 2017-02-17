var start = document.querySelector('.start');

function pause() {
	if (start.innerHTML == "Start") {
	start.innerHTML = "Pause";
 	timer = setInterval(milis);
	} else {
	start.innerHTML = "Start";
	}

}
start.addEventListener('click', pause);


var clear = document.querySelector('.clear');
function stop() {
	start.innerHTML = "Start";
	clearInterval(timer);
	milisec.innerHTML = '00';
	sec.innerHTML = '00';
	min.innerHTML = '00';

}
clear.addEventListener('click', stop);

var timerMilisec = '00';
var timerSec = '00';
var timerMin = '00';
var milisec = document.querySelector('.milisec');
var sec = document.querySelector('.sec');
var min = document.querySelector('.min');
function milis(){
	milisec.innerHTML = timerMilisec;
	sec.innerHTML = timerSec;
	timerMilisec++;
	if (timerMilisec === 1000) {
		timerMilisec = 0;
		timerSec++;
	} else {

	}
	clear;
}








// function stop() {
// 	start.addEventListener('click', )
// }

// var stop = document.querySelector('.stop')


// var click = document.querySelector('input');

// function hendler(event) {
// 	console.log('x', event.target);
// }

// // click.addEventListener('click', hendler);

// window.addEventListener('click', hendler)
// var a = 1;

// setInt = function() {
// 	console.log(a++)
// 	if (a === 6) {
// 		clearInterval(s)
// 	}
// }

// var s = setInterval(setInt, 30);


// function calc(a, b) {
// 	console.log('My name is ', this.name, 'i have ', a + b, ' doll' );
// 	console.log([].slice.call(arguments))
// }

// var context = {
// 	name: 'Nikolz',
// }

// function a(context, a, b) {
// 	calc.call(context, 3, 4);
// 	console.log([].slice.call(arguments))
// }

// a()