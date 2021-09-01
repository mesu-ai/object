const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

console.log(Object.keys(first).length);
console.log(first === second);


// compare function

function compare(obj1, obj2) {

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;

        }
        else {
            return true;
        }

    }

}

const result = compare(first, second);
console.log(result);
