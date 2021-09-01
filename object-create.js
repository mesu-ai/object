//object create
// method 1 
const friend = { name: 'mesu', age: 25 };
console.log(friend);

//method 2
const person = new Object();
console.log(person);

//method 3
const human = Object.create(friend);
console.log(human.name);

// method 4
class People {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Nam nai', 20);
console.log(peop);

//method 5
function manus(name, age) {
    this.name = name;
    this.age = age;
}
const man = new manus('kamal', 40);
console.log(man);
