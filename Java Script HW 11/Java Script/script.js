// Решить задачки:

// 1) Используя конструкцию if..else, напишите код, который получает число(возраст), если число меньше 0 - выводить неверный возраст,
// от 0 до 18 вы еще не совершеннолетний, 18 и выше вы стали взрослым.

// 2) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите “Делится” и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// 3) Напишите код который будет осуществлять следующую логику. Если сотрудник проработал от 1 до 3х лет в компании, его зарплата увеличивается на 10%,
// если от 3x и выше то 20%. Если в результате увеличения полученная ЗП меньше 4000 тысяч, сотруднику прибавляется бонус в размере 1000 , а если 4000 и больше плюс 500.

// Task 1

function ageTolerance() {
let age = +document.getElementById("age").value;
if (age < 0) {                                 									// (typeof age != typeof 1) не пригодилось
	alert("Invalid age entered, please enter a number from 0 or higher!");
} else if ((age >= 0) && (age < 18)) {
	alert("You are not yet an adult");
} else if (age >= 18) {
	alert("You have become an adult");
}
}

// Task 2

function Division() {
let a = document.getElementById("a value").value;
let b = document.getElementById("b value").value;
let c = a / b;
let div_res = a % b
if (div_res == 0) {
	alert("Is divided, result: " + c);
} else if (div_res > 0) {
	alert("the number is divisible with the remainder: " + div_res);
} 
// else if ((a != typeof 1) || (b != typeof 1)){
// alert("The entered value of variables a or b is not a number, please enter a number")   проверка не пригодилась
// }
}

// Task 3

function SalaryCalculation() {
let work_exp = document.getElementById("work_exp_val").value;
let current_salary = document.getElementById("current_salary_val").value;
let recalc_salary = 0;

if ((work_exp >= 1) && (work_exp < 3)){
	alert("Due to the current level of salary and work experience, your salary will be increased by 10 percent, future income: " + Math.round(recalc_salary = current_salary * 1.1));
} else if (work_exp >= 3) {
	alert("Due to the current level of salary and work experience, your salary will be increased by 20 percent, future income: " + Math.round(recalc_salary = current_salary * 1.2));
} 

// else if ((work_exp != typeof 1) || (current_salary != typeof 1)) {
// 	alert("You entered a value less 1 or not a numeric value for work experience or salary, please enter correct value!")     проверка не пригодилась
// } 

if ((recalc_salary < 4000) && (recalc_salary > 0)) {
	alert("Since your new salary less than 4000, we decided to give you a bonus of 1000, your recalculated salary: " + Math.round(recalc_salary + 1000));
} else if (recalc_salary >= 4000) {
	alert("Since your new salary is more than 4000, we decided to give you a bonus of 500, your recalculated salary: " + Math.round(recalc_salary + 500));
}
}
