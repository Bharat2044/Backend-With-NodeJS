/**
 * Global scope
 */
/** 
var name = "Bharat";

console.log(name);


function func(){
    console.log(name);
}

func(); **/


/**
 * Local scope/ Function scope variable
 */
/** 
function func(){
    var num = 55;
    console.log(num);
}

func();
console.log(num);

**/


/**
 * Block Scope
 */

{
    let x = 20;
    console.log(x);
}

console.log(x);