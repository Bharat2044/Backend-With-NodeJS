// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
const eventEmitter = new EventEmitter();

// Register to error
eventEmitter.on('error', (err) => {
console.log("whoops! there was an error");
});

// Register to newListener
eventEmitter.on('newListener', (event, listener) => {
    console.log(`The listener is added to ${event}`);
});

// Register to removeListener
eventEmitter.on('removeListener', (event, listener) => {
    console.log(`The listener is removed from ${event}`);
});

// Declaring listener fun1 to myEvent1
let fun1 = (msg) => {
    console.log("Message from fun1: ", + msg);
}

// Declaring listener fun2 to myEvent2
let fun2 = (msg) => {
    console.log("Message from fun2: ", + msg);
}

// Listening to myEvent with fun1 and fun2
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);

// Removing listener
eventEmitter.off('myEvent', fun1);

// Triggering myEvent
eventEmitter.emit('myEvent', "Event Occourred");

// Triggering error
eventEmitter.emit('error', new Error('whoops!'));
