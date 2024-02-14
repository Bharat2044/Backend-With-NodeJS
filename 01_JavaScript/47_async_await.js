/*
async function getMessage() {
    return "Hello";
}

console.log(getMessage());

getMessage().then(result => console.log(result));
*/


/*
function printHelloAfterWait() {
    console.log("First Line");

    setTimeout(() => {
        console.log("Hello");
    }, 3000);

    console.log("Last Line");
}

printHelloAfterWait();
*/


console.log("Start");

async function printHello() {
    console.log("First Line");

    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello");
            resolve("Promise resolved!"); // Resolve the promise with a value
        }, 3000);
    });

    let result = await data;
    console.log(result);

    console.log("Last Line");
}

printHello();
console.log("End");
