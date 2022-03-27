// Функция может вернуть результат своего выполнения

// function sum(a, b) {
//
//
//     return a + b;
// }
//
//
// let result = sum(1, 2);
// let result2 = sum(10, 30)
//
// alert( result0 ); // undefined
// alert( result ); // 3
// alert( result2 ); // 40


// Вызовов return может быть несколько

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }
//
// let age = +prompt('Сколько вам лет?', 18);
//
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }


// function example(a = 10, b = 5) {
//     return a + b;
//     return a - b;
// }
//
// console.log(example());


// function example2 () {
//     let a = 2 + 2;
//     a += 200;
//     ++a;
//     return null;
// }
//
// console.log(example2());


// Если функция возвращает пустой return то результатом будет являться undefined

// Если во время выполнения функции она натыкается на return то она сразу же останавливает свое выплнение