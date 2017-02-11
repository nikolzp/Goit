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
form.setAttribute('class', 'form');
body.appendChild(form);


s = function(howTheme, howParagraph) {
	for (var t = 1; t < howTheme+1; t++) {
		console.log(t);
		theme = document.createElement('p');
		theme.innerHTML = t+'. Вопрос №'+t;
		form.appendChild(theme);
		for (var p = 1; p < howParagraph+1; p++) {
			golos = document.createElement('input');
			golos.setAttribute('type', 'checkbox');
			form.appendChild(golos);

			span = document.createElement('span');
			span.innerHTML = ' Вариант ответа №'+p+'<br>';
			form.appendChild(span);
		}
	}
}

 var howTheme = prompt('Enter how themes');
 var howParagraph = prompt('Enter how paragraphs');
 s(Number(howTheme), Number(howParagraph));


submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
submit.style.marginTop = '20px';
submit.style.marginLeft = '125px';
form.appendChild(submit);
