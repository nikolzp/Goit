arr = []

for (var i = 1; i <= 5; i++) {
	var name = prompt("Enter name "+ i);
	arr.push(name);
}

console.log(arr);

var yourName = prompt("Enter your name!");

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == yourName) {
		var fName = arr[i];
	} 
}

if (fName != undefined) {
	alert(fName+" Вы успешно вошли!");
} else {
	alert("Нет такого пользователя!");
}
