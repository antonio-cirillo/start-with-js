const { readFile, writeFile } = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
    
    return new Promise((resolve, reject) => {

        readFile(path, 'utf8', (err, data) => {
    
            if(err) {
                console.log(err);
                reject();
            } else {
                resolve(data);
            }
        
        });

    });

}

/*
    getText('../content/first.txt')
        .then(result => console.log(result))
        .catch(error => console.log(error));
*/

const start = async () => {
    
    try {
        // const first = await getText('../content/first.txt');
        // const second = await getText('../content/second.txt')
        //const first = await readFilePromise('../content/first.txt', 'utf8');
        //const second = await readFilePromise('../content/second.txt', 'utf8');
        
        const first = await readFile('../content/first.txt', 'utf8');
        const second = await readFile('../content/second.txt', 'utf8');
        
        // await writeFilePromise('./content/concat.txt', `${first}\n${second}`);
        await writeFile('../content/concat.txt', `${first}\n${second}`);
    } catch(error) {
        console.log(error);
    }

}

start();