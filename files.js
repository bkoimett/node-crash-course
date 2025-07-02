const fs = require('fs');

// fs.readFile('./docs/blog2.txt', (err, data) => { //add 'utf8' encoding if you want string output
//     // fs.readFile('./docs/blog1.txt', 'utf8', (err, data
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data.toString());
// })

// // write files

// fs.writeFile('./docs/blog1.txt', 'Hello, Again', () => {
//     console.log('File was written');
// })

// fs.writeFile('./docs/blog2.txt', 'Hello, Again (now in a generated file)', () => {
//     console.log('File was written');
// })

// directories - check if folder exists and run the code if it does not exist
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            return;
        }
        console.log('Directory created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.error('Error removing directory:', err);
            return;
        }
        console.log('Directory removed');
    })
}

// delete files

if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return;
        }
        console.log('File deleted');
    });
}

