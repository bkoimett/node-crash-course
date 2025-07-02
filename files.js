const fs = require('fs');

fs.readFile('./docs/blog1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('Reading file completed.');