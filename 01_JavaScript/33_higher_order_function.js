function operation(operatorFn, a, b){
    return operatorFn(a, b);
}

function add(a, b) {
    return a+b;
}

let result = operation(add, 5, 6);
console.log(result) ;


function getGreetMethod(){
    return function(){
        console.log("Hello Everyone!!");
    }
}

let greetFn = getGreetMethod();
console.log(typeof greetFn);

greetFn();