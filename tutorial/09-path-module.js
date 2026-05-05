const pah = require('path');

console.log('Path separator:', pah.sep);

const filePath = pah.join('/content/', 'subfolder', 'test.txt');
console.log('File path:', filePath);

const base = pah.basename(filePath);
console.log('Base name:', base);

const absolute = pah.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('Absolute path:', absolute);