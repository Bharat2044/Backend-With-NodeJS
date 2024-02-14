// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
const eventEmitter = new EventEmitter();

// Declaring listener fun1 to myEvent
let fun1 = (msg) => {
    console.log("Message from fun1: ", + msg);
}

// Declaring listener fun2 to myEvent
let fun2 = (msg) => {
    console.log("Message from fun2: ", + msg);
}

// Regestering fun1 and fun2
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);

// Triggering myEvent
eventEmitter.emit('myEvent', "First event");

// Removing listener fun1
eventEmitter.removeListener('myEvent', fun1);

// Triggering myEvent
eventEmitter.emit('myEvent', "Event Occourred");

// Removing all the isteners to myEvent
eventEmitter.removeAllListeners('myEvent', fun1);

// Triggering myEvent
eventEmitter.emit('myEvent', "Event Occourred");
