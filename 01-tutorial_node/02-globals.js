//
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

// setTimeout() - executes a function after a number of milliseconds
// setInterval() - executes a function every X milliseconds
setInterval(() => {
    console.log('Hello world');
}, 1000); // every 1 second


// To run this file, use the command: node 01-intro.js

// modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)