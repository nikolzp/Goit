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

theme = {
	tegP: 'p',
	themeGolos: function(num) {
		this.tegP = document.createElement('p');
		this.tegP.innerHTML = num+'.Вопрос №'+num;
		form.appendChild(this.tegP);
	}
}

golos = {
	tegInput: 'input',
	tegSpan: 'span',
	paragraph: function(num) {
		this.tegInput = document.createElement('input');
		this.tegInput.setAttribute('type', 'checkbox');
		form.appendChild(this.tegInput);

		this.tegSpan = document.createElement('span');
		this.tegSpan.innerHTML = 'Вариант ответа №'+num+'<br>';
		form.appendChild(this.tegSpan);
	}
}

theme.themeGolos(1);
golos.paragraph(1);
golos.paragraph(2);
golos.paragraph(3);
theme.themeGolos(2);
golos.paragraph(1);
golos.paragraph(2);
golos.paragraph(3);
theme.themeGolos(3);
golos.paragraph(1);
golos.paragraph(2);
golos.paragraph(3);

submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
submit.style.marginTop = '20px';
submit.style.marginLeft = '125px';
form.appendChild(submit);