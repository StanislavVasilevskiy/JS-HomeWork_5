	// Задание № 2
console.log("Задание № 2");
console.log("");

function drawPir (count) {
	count = count || prompt("Введите количество рядов для построения пирамиды");

	let arr = [];

	for (i = 1; i <= count; i++) {
		arr.push(["*"]);
	};

	for (i = 0; i < arr.length; i++) {
		for (j = 1; j <= i; j++) {
			arr[i] = [arr[i] + "*" + "*"];
		};
	};

	for (i = arr.length-1; i >= 0; i--) {
		for (j = arr.length-1; j > i; j--) {
			arr[i] = [" " + arr[i]];
		};
	};

	str = arr.join("\n");

	console.log(str);
};

drawPir();

//==================================Перевернутая пирамида===============================

function drawPirRev (count) {
	count = count || prompt("Введите количество рядов для построения перевернутой пирамиды");

	let arr = [];

	for (i = 1; i <= count; i++) {
		arr.push(["*"]);
	};

	for (i = 0; i < arr.length; i++) {
		for (j = 1; j <= i; j++) {
			arr[i] = [arr[i] + "*" + "*"];
		};
	};

	for (i = arr.length-1; i >= 0; i--) {
		for (j = arr.length-1; j > i; j--) {
			arr[i] = [" " + arr[i]];
		};
	};

	let arrRev = arr.reverse();

	str = arrRev.join("\n");

	console.log(str);
};

drawPirRev();