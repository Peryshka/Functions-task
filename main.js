'use strict'
/*
1) Математические расчеты и функции
Создайте две функции, add и multiply; пусть каждая принимает
по два аргумента. Функция add должна складывать аргументы
и возвращать результат, а функция multiply — перемножать
аргументы.
    С помощью только этих двух функций вычислите следующее
несложное выражение: 36325 * 9824 + 777*/
//function for sum (add)
const add = (firstNum, secondNum) => {
 const result = firstNum+secondNum;
 return result;
}
console.log(add(5,7));

//function for multiply
const multiply = (firstNum, secondNum) => {
    const result = firstNum * secondNum;
    return result;
}
console.log(multiply(10, 5));

//3 variant for expression 36325 * 9824 + 777
console.log("Third variant");
console.log(add(multiply(36325, 9824 ), 777));
/*
 2) Сделайте функцию, которая возвращает квадрат числа.
  Число передается параметром.
 */
const square = (Number) => {
    const result = Number*Number;
    return result;
}
console.log(square(7));
/*
3) Сделайте функцию, которая возвращает сумму двух чисел.
*/
//Function Declaration
function sum(firstNumber, secondNumber){
    const result  = firstNumber + secondNumber;
    return result;
}
console.log(sum(70, 31));
/*
4) Сделайте функцию, которая отнимает от первого числа
второе и делит на третье.
*/
//Function Expression
const expression = function(firstNum, secondNum, thirdNum){
    const result = (firstNum-secondNum)/thirdNum;
    return result;
}
console.log(expression(2000,50,3));
/*
5) Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
*/
const weekDays = (num) => {
    if(num >= 1 || num <= 7){
        switch(num){
            case 1:
                return "Понедельник";
            case 2:
                return "Вторник";
            case 3:
                return "Среда";
            case 4:
                return "Четверг";
            case 5:
                return "Пятница";
            case 6:
                return "Суббота";
            case 7:
                return "Воскресенье";
            default:
                return "Не угадали";
        }

    }
    return num;
}
console.log(weekDays(7));


