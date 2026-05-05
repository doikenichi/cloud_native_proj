const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
// fs.readFileSync()

console.log('Start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// overwrite file if it already exists
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 'utf-8'
);

// append to file if it already exists
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    {flag: 'a'} // append flag
);
console.log('Done with this task');
console.log('starting the next one');