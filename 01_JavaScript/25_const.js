/**
 * const 
 *   - scope is exactly same as let
 *   - const variables are final, can't be re-assigned a value
 */


const x = 1;
console.log(x);
// x = 2;   // TypeError: Assignment to constant variable.

function f1(){
    const a = 5;
    console.log(a);
}

f1();
// console.log(a);  // ReferenceError: a is not defined


{
   const b = 5;
   console.log(b);
}
// console.log(b);  // ReferenceError: b is not defined


// console.log(c);  // ReferenceError: Cannot access 'c' before initialization
const c =23 

console.log(c) 
