var element = document.createElement('ul');
element.classList.add('box');
element.innerHTML = 'hello world';

var body = document.querySelector('body');
body.appendChild(element);

var liElement = document.createElement('li');
liElement.innerHTML = '1';
var ulElement = document.querySelector('.box');
ulElement.appendChild(liElement);

var liElement = document.createElement('li');
liElement.innerHTML = '2';
var ulElement = document.querySelector('.box');
ulElement.appendChild(liElement);