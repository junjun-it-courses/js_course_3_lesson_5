let user = {
    name: 'Vlad',
    age: 10,
    getUser: function(firstName, lastName = 'Dou') {
        return firstName + ' ' + lastName;
    }
}


let userData = user.getUser('Vova');

alert(userData);





// let user = {
//     name: "Vlad",
//     age: 10,
//     gender: 'male',
//     sayHi: function () {
//         alert('Hello my name is Vlad')
//     }
// }
//
// user.sayHi();


// function sayHi() {
//     alert('Function sayHi');
// }
// sayHi();
//
//
//
// let obj = {
//     greetUser: function () {
//         alert('Method Greet')
//     }
// }
//
// obj.greetUser();