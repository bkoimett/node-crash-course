const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => { //add 'utf8' encoding if you want string output
    // fs.readFile('./docs/blog1.txt', 'utf8', (err, data
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data.toString());
})