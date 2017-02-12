var body = document.querySelector('body');
body.style.width = '500px';
body.style.height = '500px';
body.style.margin = '0 auto';

var deskr = document.createElement('div');
deskr.setAttribute('class', 'deskr');
var h3 = document.createElement('h3');
h3.innerHTML = 'Тест по программированию';
h3.style.textAlign = 'center';
deskr.appendChild(h3);
body.appendChild(deskr);

var form = document.createElement('form');
form.setAttribute('class', 'form-vertical');
body.appendChild(form);

var div = document.createElement('div');
div.setAttribute('class', 'form-group');
form.appendChild(div);

golos = function(howTheme, howParagraph) {
	for (var t = 1; t < howTheme+1; t++) {
		console.log(t);
		theme = document.createElement('p');
		theme.style.marginTop = '15px';
		theme.innerHTML = t+'. Вопрос №'+t;
		div.appendChild(theme);
		for (var p = 1; p < howParagraph+1; p++) {
			golos = document.createElement('input');
			golos.setAttribute('type', 'checkbox');
			golos.style.marginRight = '10px';
			div.appendChild(golos);

			span = document.createElement('span');
			span.innerHTML = ' Вариант ответа №'+p+'<br>';
			div.appendChild(span);
		}
	}
}

submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('class', 'btn btn-primary');
submit.setAttribute('value', 'Проверить мои результаты');
submit.style.marginTop = '20px';
submit.style.marginLeft = '125px';
form.appendChild(submit);

var howTheme = prompt('Enter how themes');
var howParagraph = prompt('Enter how paragraphs');
golos(Number(howTheme), Number(howParagraph));
