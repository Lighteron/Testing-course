// Решить задачки:

// 7) "Найти сумму минимального и максимального числа в массиве используя JS
//	  [1,4,12,66,15]

// 8) Даны переменные x и n вычислить x^n используя JS.

// 9) <div>
//             <ol>
//                     <li></li>
//                     <br>
//                     <li></li>
//                     <br>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//             </ol>
//    </div>
// Выше вы видите некую структуру дом дерева. Вам с помощью css селектора необходимо найти 3й li. Напишите просто css selector"

// Task 7

function maximumval() {
	let array = [1,4,12,66,15];
	let max_of_array = array.reduce((a,b) => a>b?a:b);
	let min_of_array = array.reduce((a,b) => a<b?a:b);
	let sum_of_mnmx = max_of_array + min_of_array;
	alert("Max val in array = " + sum_of_mnmx);
}

// Task 8

function exponen() {
	let x = document.getElementById("x value").value;
	let n = document.getElementById("n value").value;
	let r = Math.pow(x, n);
	alert("x^n = " + r);
}

// Task 9
// in css file