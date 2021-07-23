const { readFileSync, writeFileSync } = require('fs'); 

const createBigFile = (fileIn, fileOut) => {
    const data = readFileSync(fileIn, 'utf-8');
    for(let i = 0; i < 10000; i++)
        writeFileSync(fileOut, `${data} ${i}\n`, {flag: 'a'});
}

createBigFile('../content/first.txt',
    '../content/big-file.txt');