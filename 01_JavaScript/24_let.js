/**
 * let 
 * 
 * 1. No hoisting
 * 2. It also has block scope
 */


function f1(){
    let a = 5;
    console.log(a);
}

f1();
// console.log(a);  // ReferenceError: a is not defined


{
   let b = 5;
   console.log(b);
}
// console.log(b);  // ReferenceError: b is not defined


// console.log(c);  // ReferenceError: Cannot access 'c' before initialization
let c =23 

console.log(c) 
