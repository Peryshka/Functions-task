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
 console.log(result);
 return result;
}
add(10,20);

//function for multiply
const multiply = (firstNum, secondNum) => {
    const result = firstNum * secondNum;
    console.log(result);
    return result;
}
multiply(10, 5);
//3 variant for expression 36325 * 9824 + 777
console.log("Third variant");
multiply(36325, 9824) + add(777);
/*
 2) Сделайте функцию, которая возвращает квадрат числа.
  Число передается параметром.
 */
const square = (Number) => {
    const result = Number*Number;
    console.log(result);
    return result;
}
square(5);
/*
3) Сделайте функцию, которая возвращает сумму двух чисел.
*/
//Function Declaration
function sum(firstNumber, secondNumber){
    const result  = firstNumber + secondNumber;
    console.log(result);
    return result;
}
sum(20, 31);
/*
4) Сделайте функцию, которая отнимает от первого числа
второе и делит на третье.
*/
//Function Expression
const expression = function(firstNum, secondNum, thirdNum){
    const result = (firstNum-secondNum)/thirdNum;
    console.log(result);
    return result;
}
expression(2000,50,3);
/*
5) Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
*/
const weekDays = (num) => {
    if(num >= 1 || num <= 7){
        switch(num){
            case 1:
                console.log("Понедельник");
                break;
            case 2:
                console.log("Вторник");
                break;
            case 3:
                console.log("Среда");
                break;
            case 4:
                console.log("Четверг");
                break;
            case 5:
                console.log("Пятница");
                break;
            case 6:
                console.log("Суббота");
                break;
            case 7:
                console.log("Воскресенье");
                break;
            default:
                console.log("Не угадали");
        }

    }
    console.log(num);
    return num;
}
weekDays(2);


