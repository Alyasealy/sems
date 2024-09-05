'use strict'

// практика 2

let name = 'Джон';
let admin = name;
alert(admin)

// задание два

let city;
let nasel;
let lett;

city = prompt('Введите название', 'city');
nasel = prompt('Сколько население', 'nasel');
lett = prompt('Год основания города', 'lett');
// Вывести сообщение: "Городу [наименование города] исполнилось [рассчитать с момента появления] лет с момента его образования. Население - количество] человек"
alert(`Городу ${city} исполнилось с момента образования ${2024-lett} лет. Население ${nasel} челоовек`);


//задание 3

// let radius='r';
// let ploshad;

// ploshad=((radius)*(radius)* Math.PI);
// alert(ploshad);


let radius = prompt('radius');
let ploshad = Math.PI * (radius**2);
alert (`${ploshad}`);


//задание 4

let x;
let y;

x=prompt('первое');
y=prompt('второе');

alert(`сумма${Number(x)+Number(y)}`);
alert(`вычмитание${x-y}`);
alert(`умножение${x*y}`);
alert(`деление${x/y}`);
alert(`${Number(x)+Number(y)}, ${x-y}, ${x*y}, ${x/y} `)