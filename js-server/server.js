const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content style
    res.setHeader('Content-type', 'text/html')

    let path = './views/'
    switch (req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        
        case '/about-me':
            res.statusCode = 301
            res.setHeader('location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    // send html file
    fs.readFile(path, (err, data) =>{
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