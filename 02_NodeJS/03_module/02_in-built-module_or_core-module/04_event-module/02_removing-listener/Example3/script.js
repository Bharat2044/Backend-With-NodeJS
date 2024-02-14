// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
const eventEmitter = new EventEmitter();

// Declaring listener fun1 to myEvent1
let fun1 = (msg) => {
    console.log("Message from fun1: ", + msg);
}

// Declaring listener fun2 to myEvent2
let fun2 = (msg) => {
    console.log("Message from fun2: ", + msg);
}

// Listening to myEvent with fun1 and fun2
eventEmitter.addListener('myEvent', fun1);
eventEmitter.addListener('myEvent', fun2);

// Listing listeners
console.log(eventEmitter.listeners('myEvent'));

// Count the listeners registered to myEvent
console.log(eventEmitter.listenerCount('myEvent'));

// Triggering myEvent
eventEmitter.emit('myEvent', "Event Occourred");
