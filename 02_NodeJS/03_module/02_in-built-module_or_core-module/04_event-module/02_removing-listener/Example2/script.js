// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
const eventEmitter1 = new EventEmitter();
const eventEmitter2 = new EventEmitter();

// Getting max listener
console.log("Default max listener for eventEmitter1 is: ", eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ", eventEmitter2.getMaxListeners());

// Set global defaultMaxListeners to 2
EventEmitter.defaultMaxListeners = 2;

// Getting max listener
console.log("Default max listener for eventEmitter1 is: ", eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ", eventEmitter2.getMaxListeners());

// Set global defaultMaxListeners to 5
EventEmitter.defaultMaxListeners = 5;

// Getting max listener
console.log("Default max listener for eventEmitter1 is: ", eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ", eventEmitter2.getMaxListeners());


// Declaring listener fun1 to myEvent1
let fun1 = (msg) => {
    console.log("Message from fun1: ", + msg);
}

// Declaring listener fun2 to myEvent2
let fun2 = (msg) => {
    console.log("Message from fun2: ", + msg);
}

// Listening to myEvent1 with 3 instance of fun1
for(let i=0; i<3; i++)
    eventEmitter1.addListener('myEvent1', fun1);

// Listening to myEvent2 with 3 instance of fun2
for(let i=0; i<5; i++)
    eventEmitter2.addListener('myEvent2', fun2);

// Emitting myEvent1 and myEvent2
eventEmitter1.emit('myEvent1', "Event1 Occourred");
eventEmitter2.emit('myEvent2', "Event2 Occourred");
