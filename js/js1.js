"use strict";

//MIN

   //1 Напиши всі можливі варіанти створення функцій.
// Function Declaration
// calcSumm(4,5);
//
// function calcSumm (numOne, numTwo) {
//     let sum = numOne + numTwo;
//         console.log(sum);
// }
//
// calcSumm(3,5);
// calcSumm(6,5);

//Function Expression

// let calcSumm = function (numOne, numTwo) {
//     let sum = numOne + numTwo;
//     console.log(sum);
// }
//
//  calcSumm (3,5);

//Arrow Functions
// let calcSumm = (numOne, numTwo) => numOne + numTwo;
//
//    console.log(calcSumm(3,8));

    //2 Створи функцію, яка буде виводити кількість переданих їй аргументів.

// const calcArguments = (...argument) => {
//     return argument.length
// };
//
// console.log(calcArguments(1,2,3,4))
// console.log(calcArguments(2,2,2,2,2,2,2,2,2,2,));


// або

// function calcArguments (...argument) {
//     return argument.length
// }
// console.log(calcArguments(1,2,3,4));


    //3 Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.


// function getNum (numOne, numTwo) {
//     if (numOne < numTwo) {
//         return console.log(-1)
//     };
//     if (numOne > numTwo) {
//         return console.log(1)
//     };
//     if (numOne === numTwo) {
//         return console.log(0)
//     };
// }
//
// getNum (1,6);
// getNum (6,4);
// getNum (2,2);


    //4 Напиши функцію, яка обчислює факторіал переданого їй числа.

// function calcFactorialize(num) {
//     if (num === 0 || num === 1)
//         return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i;
//     }
//     return num;
//
// }
// calcFactorialize();
// console.log(calcFactorialize(5));

//или

// function factorial(num) {
//     var x = num;
//     while (x > 1) {
//         num *= x-1;
//         x--;
//     }
//     return num;
// }

    //5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
    // Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function writeText (numOne, numTwo, numThree) {
//     let text = numOne + numTwo + numThree;
//     alert (text);
//     console.log(text);
// }
// writeText('1','2','3');

    //6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
    //Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// function calcSquare (paramOne, paramTwo) {
//     let square = paramOne * paramTwo;
//     if (paramTwo === undefined) {
//         square = paramOne ** 2;
//     }
//     console.log(square);
// }
// calcSquare(2,6);// два параметра
// calcSquare(2);// один параметр


