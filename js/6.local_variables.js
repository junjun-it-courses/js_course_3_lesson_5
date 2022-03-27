// Переменные, объявленные внутри функции,
// видны только внутри этой функции.

function showMessage() {

    let message = "Привет, я JavaScript!"; // локальная переменная

    alert( message );
}

showMessage(); // Привет, я JavaScript!

alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции
