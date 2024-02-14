/**
 * Define a function
 */

function greet(){
    console.log("Hello Everyone !")
}

greet()


/**
 * I want to get the sum of two numbers
 */
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));


// Default Parameters
function sum(a, b = 7){
    return a+b ;
}

console.log(sum(5))
console.log(sum(2, 3));


// arguments object
function func(){
    console.log(arguments)
}

func(1,2,3,4,5,5,6)