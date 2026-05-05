const {readFile, writeFile} = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return ;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return ;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`, 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return ;
            }
            // console.log('File written successfully');
            console.log('Done with this task');
        });
    })
})
console.log('starting the next one');

