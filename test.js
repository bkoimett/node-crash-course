const firstName = 'Koimett';

const greet = (firstName) => {
    console.log(`Hello, ${firstName}!`);
}

greet('Mario');
greet('Yoshi');

module.exports = { greet }; // Exporting the greet function for use in other modules