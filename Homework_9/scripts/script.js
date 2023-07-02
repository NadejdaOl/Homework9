// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// function f2 () {
    // let i;
    // let p;
    // let divNumbers=document.querySelector('.numbers')
    // for(i=100; i>=50; i = i - 10) {
       //  p=document.createElement('p');
        // p.textContent = i;
        // console.log(p);
        // divNumbers.appendChild(p);
    // }
// }
// f2()

 // 2.Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// let strings = ["Montag,", "Dienstag,", "Mittwoch."];

// let divContainer = document.querySelector('.strings_container');


// for(let string of strings) {
    // const p = document.createElement('p');
    // p.textContent = string;
    // console.log(p);
    // divContainer.appendChild(p);
// }


// 3.Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

let users = [
    { first_name: "Artem", last_name: "Demin", age: 18 },
    { first_name: "Janin", last_name: "Rosem", age: 25 },
    { first_name: "Vladimir", last_name: "Karamasov", age: 16 },
    { first_name: "Olha", last_name: "Wagruz", age: 20 }
];

let usersContainer = document.querySelector('.users_container');
for(let i = 0; i < users.length; i++) {
    let user = users[i];
        if(user.age >= 18) {
    
        let card = document.createElement('div');
        card.className = 'user_card';
    
    card.innerHTML = '<p>Name: ' + user.first_name + ' ' + user.last_name + '</p>' +
    '<p>Age: ' + user.age + '</p>';

        usersContainer.appendChild(card);
    }
}



