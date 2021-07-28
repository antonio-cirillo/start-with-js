const { createReadStream } = require('fs');

const stream = createReadStream(
    '../content/big-file.txt', 
    { highWaterMark: 9000 }
);

stream.on('data', (chunk) => {
    console.log(chunk);
})