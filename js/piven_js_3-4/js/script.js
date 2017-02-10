// var form = document.createElement('form');
// form.classList.add('form');
// form.innerHTML = 'question#1 <br>'
// var body = document.querySelector('body');
// body.appendChild(form);


// var input = document.createElement('input');
// input.setAttribute('type', 'checkbox');
// input.style.marginLeft = '10px';
// var form = document.querySelector('.form');
// form.appendChild(input);

// var text = document.createElement('span');
// text.innerHTML = 'olol <br>';
// form.insertBefore(text, form.input);


// var input = document.createElement('input');
// input.setAttribute('type', 'checkbox');
// input.style.marginLeft = '10px';

// var text = document.createElement('span');
// text.innerHTML = 'olol ';

// var form = document.querySelector('.form');
// form.appendChild(input);
// form.insertBefore(text, form.input);


var body = document.querySelector('body');
body.style.width = '500px';
body.style.height = '500px';
body.style.margin = '0 auto';

var deskr = document.createElement('div');
deskr.setAttribute('class', 'deskr');
var h3 = document.createElement('h3');
h3.innerHTML = 'Тесте по программированию';
h3.style.textAlign = 'center';
deskr.appendChild(h3);
body.appendChild(deskr);


var form = document.createElement('form');
form.setAttribute('class', 'form');
body.appendChild(form);


p = document.createElement('p');
p.innerHTML = '1. Вопрос №1';
form.appendChild(p);

input = document.createElement('input');
input.setAttribute('type', 'checkbox');
form.appendChild(input);

span = document.createElement('span');
span.innerHTML = 'Вариант ответа №1';
span.style.marginLeft = '10px';
form.appendChild(span);

input = document.createElement('input');
input.setAttribute('type', 'checkbox');
form.appendChild(input);

span = document.createElement('span');
span.innerHTML = 'Вариант ответа №2';
span.style.marginLeft = '10px';
form.appendChild(span);