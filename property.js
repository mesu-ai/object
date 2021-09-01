const people = { name: 'mesu', age: 25, gender: 'male', position: 'student' };

console.log(people);
console.log(people.name);


// key
const keys = Object.keys(people);
console.log(keys);
console.log(Object.keys(people).length.length);
// values
const values = Object.values(people);
console.log(values);

// entries
const entry = Object.entries(people);
console.log(entry);

// loop
for (const key in people) {
    if (Object.hasOwnProperty.call(people, key)) {
        const element = people[key];
        console.log(element);

    }
}

for (const peop in people) {
    console.log(peop, ':', people[peop]);

}




