const EventEmmiter = require('events')

const customEvent = new EventEmmiter();

customEvent.on('custom-event', (data) => {
    console.log('Im listening event: custom-event.');
    console.log(`Data receive: ${data}`);
});

customEvent.emit('custom-event', 'This is first arg.');