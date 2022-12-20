// Решить задачки:

// Сделать валидацию для вашей формы

// 1. Имя (Длина 2 - 20 только английские)

// 2. Емейл проверить что там длина 6 -12 символов(англиские) до @ и потом почта gmail.com или ukr.net

// 3. Мобильный телефон 380 + 50|63|66|67|68|91|92|93|97| 96 + 7 digits

// В итоге мы должны получить alert c сообщением "Мы слышим вас" или "Мы вас не слышим"

// Task

function CallForm() {
	let name = document.getElementById("user_name").value;
	let email = document.getElementById("email").value;
	let mob_numb = +document.getElementById("mobile number").value;

	let reg_name = /^[a-zA-Z /s a-zA-Z]{2,20}$/
	let reg_email = /^[a-zA-Z0-9]{6,12}@+(gmail.com|ukr.net)$/
	let reg_mob_numb = /^(380)+(50|63|66|67|68|91|92|93|97|96)+[0-9]{7}$/

	let check_name = reg_name.test(name)
	let check_email = reg_email.test(email)
	let check_mob_numb = reg_mob_numb.test(mob_numb)

	if (check_name && check_email && check_mob_numb) {                                 									// (typeof age != typeof 1) не пригодилось
		alert("We hear you");
	} else {
		alert("We don't hear you");
	}
}

// name check
// console.log(name)
// console.log(reg_name.test(name))
// email check
// console.log(email)
// console.log(reg_email.test(email))
// mobile number check
// console.log(mob_numb)
// console.log(reg_mob_numb.test(mob_numb))
