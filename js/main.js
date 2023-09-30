// Створити скрипт який має визначити середнє арифметичне трьох чисел з наступними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let num1 = +prompt('Write a first number');
let num2 = +prompt('Write a second number');
let num3 = +prompt('Write a third number');

if ((Number(num1) && Number(num2) && Number(num3)) || ((Number(num1) === 0) || (Number(num2) === 0)|| (Number(num3) === 0))) {
    let average = (num1 + num2 + num3) / 3;
    alert(`Арифметичне середнє значення введених чисел = ${average}`);
}
else {
    alert('Please, write a number');
}