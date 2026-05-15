// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./04-names');

// console.log(names);
const sayHi = require('./05-utils');

const data = require('./06-alternative-flavor');
// console.log(data);
// console.log(data.items);
// console.log(data.singlePerson);

// require('./07-mind-grenade'); // the function is executed once the file is loaded in memory, so addValues() is executed.
require('./07-mind-grenade');

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

// To run this file, use the command: node 03-modules.js