/**
 * var  :
 *   1. It's used to define a variable
 *   2. It has function scope but no block scope
 *   3. It is hoisted
 */

function f1(){
    var a = 5;
    console.log(a);
}

f1();
// console.log(a);  // ReferenceError: a is not defined


{
   var b = 5;
   console.log(b);
}
console.log(b);


console.log(c);
var c =23 

console.log(c) 
