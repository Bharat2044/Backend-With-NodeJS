let numbers = [1, 2, 3, 4, 5];

let isGreaterThanThree = numbers.some(function(number) {
    return number > 3;
});

let allGreaterThanZero = numbers.some(function(number) {
    return number > 0;
});

console.log(isGreaterThanThree);  // true
console.log(allGreaterThanZero);  // true