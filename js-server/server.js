const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content style
    res.setHeader('Content-type', 'text/html')

    // send html file
    fs.readFile('./views/index.html', (err, data) =>{
        if (err) {
            console.log(err)
        } else{
            // res.write(data)
            res.end(data) // do this when only passing in one thing
        }
    })
    // res.write('<head><link rel="stylesheet" href="#></head>')
    // res.write('<h1>Hello Ninjas</h1>')
    // res.write('<p>How are you?</p>')
    // res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})