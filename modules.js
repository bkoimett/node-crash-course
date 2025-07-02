// const xyz = require('./people.js');
const {peoples, ages} = require('./people.js');

console.log(peoples, ages);

const {greet} = require('./test.js'); // Importing the greet function from test.js

for (const peepz of peoples) {
    greet(peepz); // Calling the greet function for each person
}

console.log('------------------');
const os = require('os'); // Importing the os module
console.log(os.platform(), os.homedir()); // Logging the platform and home directory of the operating system