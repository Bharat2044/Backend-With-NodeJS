/**
 * For Arrays
 */

function fun1(a, b, ...rest) {
    console.log(a + b);
    console.log(rest);
}

fun1(1, 2, 3, 4, 5, 6);


/**
 * For Objects
 */
let {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};

console.log(a);
console.log(b);
console.log(rest);