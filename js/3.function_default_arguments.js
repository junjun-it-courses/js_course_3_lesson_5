// Если параметр не указан, то его значением становится undefined.

function showMessage(from, text) {

    // console.log(from, text);
    //
    // if(text === undefined) {
    //     alert('Text is undefined')
    // }

    from = '*' + from + '*'; // немного украсим "from"

    alert( from + ': ' + text );
}

// showMessage("Аня"); // не передаем аргумент text


// Передача аргументов по умолчанию

// function showMessage(from, text = "текст не добавлен") {
//     console.log(from, text);
//     // alert( from + ": " + text );
// }
//
// showMessage();
// showMessage("Аня"); // Аня: текст не добавлен
// showMessage("Аня", "Hello world");

// Если аргумент text не указан то он будет содержать значание
// которое ему передано при объявлении функции (таким значанием может
// быть выражение или результат выполнение другой функции)

