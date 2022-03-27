// function showMessage(from, text) {  // аргументы: from, text
//     alert(from + ': ' + text);
// }

// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)


// изменение значиения аргумента в функции

// function showMessage(from, text) {
//
//     from = '*' + from + '*'; // немного украсим "from"
//
//     alert( from + ': ' + text );
// }
//
// let userName = "Аня";
//
// showMessage(userName, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним,
// функция изменила значение локальной переменной

// alert( from ); // Аня


// function funcName(iterations, funcArg2) {
//
//     for(let i = 0; i < iterations; i++) {
//         console.log('iteration ' + i, funcArg2 )
//     }
//
// }

// funcName(5, 'Hello JS');
// let trigger = +prompt('Enter the number pls');
//
// if(trigger) {
//     funcName(5, 'Hello JS');
// }