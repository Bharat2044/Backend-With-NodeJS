// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
const eventEmitter = new EventEmitter();

// eventEmitter.addListener(event, listener);
// eventEmitter.on(event, listener);
// eventEmitter.once(event, listener);


// Regestering to myEvent
eventEmitter.on('myEvent', (msg) => {
    console.log(msg);
})

// Triggering myEvent
eventEmitter.emit('myEvent', "First event");
