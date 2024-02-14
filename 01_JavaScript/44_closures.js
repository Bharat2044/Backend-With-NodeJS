function hello() {
    let name = "Bharat";
    console.log(name);
}

hello();
console.log(name);


function outerFn() {
    let outerVar = " I am from the outer fn"
    function innerFn() {
        console.log(outerVar);
    }

    return innerFn;
}

let fn = outerFn();
fn();




function customerCounter(){
    let count = 0
    return function(){
        count++
        console.log("New customer count is ", count)
    }
}

let counter = customerCounter()

counter()
counter()
counter()