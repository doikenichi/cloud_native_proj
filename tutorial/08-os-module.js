const os = require('os');

console.log('OS platform:', os.platform());
console.log('OS architecture:', os.arch());
// console.log('OS CPU info:', os.cpus());
// console.log('OS total memory:', os.totalmem());
console.log('OS free memory:', os.freemem());

// info about current user
const user = os.userInfo();
console.log('OS user info:', user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
console.log('OS uptime:', os.uptime(), 'seconds');

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log('Current OS info:', currentOS);