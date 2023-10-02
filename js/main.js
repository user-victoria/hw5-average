// Створити скрипт який має визначити середнє арифметичне трьох чисел з наступними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

const firstNumber = +prompt('Write a first number');
const secondNumber = +prompt('Write a second number');
const thirdNumber = +prompt('Write a third number');

if ((firstNumber && secondNumber && thirdNumber) || firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    const average = (firstNumber + secondNumber + thirdNumber) / 3;
    alert(`Арифметичне середнє значення введених чисел = ${average}`);
}
else {
    alert('Please, write a number');
}