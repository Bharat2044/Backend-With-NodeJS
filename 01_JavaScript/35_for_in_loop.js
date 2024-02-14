let x = {a: 1, b: 2, c: 3};

for (let key in x) {
    console.log(key + ": " + x[key]);
}


let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (let person of people) {
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
}