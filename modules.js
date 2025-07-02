// const xyz = require('./people.js');
const {peoples, ages} = require('./people.js');

console.log(peoples, ages);

const {greet} = require('./test.js'); // Importing the greet function from test.js

for (let i = 0; i < peoples.length; i++) {
    greet(peoples[i]); // Calling the greet function for each person
}