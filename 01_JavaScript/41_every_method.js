let numbers = [1, 2, 3, 4, 5];

let isGreaterThanThree = numbers.every(function(number) {
    return number > 3;
});

let allGreaterThanZero = numbers.every(function(number) {
    return number > 0;
});

console.log(isGreaterThanThree);  // false
console.log(allGreaterThanZero);  // true