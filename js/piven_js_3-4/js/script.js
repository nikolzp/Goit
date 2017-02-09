var element = document.createElement('form');
element.classList.add('form');
element.innerHTML = 'hello world <br>';

var body = document.querySelector('body');
body.appendChild(element);

var liElement = document.createElement('input');
liElement.type = 'checkbox';
liElement.innerHTML = '1';
var ulElement = document.querySelector('.form');
ulElement.appendChild(liElement);

var liElement = document.createElement('input');
liElement.type = 'checkbox';
liElement.innerHTML = '2';
var ulElement = document.querySelector('.form');
ulElement.appendChild(liElement);