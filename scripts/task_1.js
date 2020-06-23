	// Задание № 1
console.log("Задание № 1");
console.log("");

function form (group, name) {
	group = group || prompt("Введите номер группы", "W4017");
	name = name || prompt("Введите вашу фамилию, имя и отчество", "Иванов Иван Иванович");

	let = str0 = "",
		str1 = "* Домашняя работа: \"Функции\"",
		str2 = "* Выполнил студент гр. " + group,
		str3 = "* " + name,
		str4 = "",
		maxLength = 0,
		str1space = " ",
		str2space = " ",
		str3space = " ";

	if (str1.length >= str2.length && str1.length >= str3.length) {
		str1 += " *";
		maxLength = str1.length;
		str2 = str2 + str2space.repeat(maxLength - str2.length - 2) + " *";
		str3 = str3 + str3space.repeat(maxLength - str3.length - 2) + " *";
	} else if (str2.length >= str1.length && str2.length >= str3.length) {
		str2 += " *";
		maxLength = str2.length;
		str1 = str1 + str1space.repeat(maxLength - str1.length - 2) + " *";
		str3 = str3 + str3space.repeat(maxLength - str3.length - 2) + " *";
	} else if (str3.length >= str1.length && str3.length >= str2.length) {
		str3 += " *";
		maxLength = str3.length;
		str1 = str1 + str1space.repeat(maxLength - str1.length - 2) + " *";
		str2 = str2 + str2space.repeat(maxLength - str2.length - 2) + " *";
	};
	
	let top = [],
		bot = [];

	for (i = 0; i < maxLength; i++) {
		top.push("*");
		bot.push("*");
	}

	str0 = top.join("");
	str4 = bot.join("");

	console.log(str0 + "\n" + str1 + "\n" + str2 + "\n" + str3 + "\n" + str4);
	console.log(str3space);
};

form();