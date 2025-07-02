const people = [
    { name: 'Mario', age: 30 }, 
    { name: 'Yoshi', age: 25 },
    { name: 'Koimett', age: 28 },
    { name: 'Luigi', age: 32 }
];

// const ages = people.map(person => person.age); // Extract ages from people objects
// console.log(ages); // [30, 25, 28, 32]
console.log(people);

// Exporting the people array for use in other modules
module.exports = people;