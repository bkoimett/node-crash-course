const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content style
    res.setHeader('Content-type', 'text/html')

    res.write('<head><link rel="stylesheet" href="#></head>')
    res.write('<h1>Hello Ninjas</h1>')
    res.write('<p>How are you?</p>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})