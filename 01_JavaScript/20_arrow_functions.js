/**
 * fn with no argument and no return
 */
 var hello = () => console.log("Hello World");

 hello();


 /**
  * fn with parameters and return
  */

 let sum = (a,b) => a + b; 

 console.log(sum(5,7));


 /**
  * fn with parametes, multiple lines of fn body
  */
let process = (a, b) => {
    console.log("need tp process");
    // console.log(arguments);
    return a * b;

 }
 console.log(process(5,6)) 


 