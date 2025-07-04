const express = require('express')

// express app initialisation
const app = express()

// register view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3000)

// get handler
app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')   
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get("/about", (req, res) => {
    // res.send('<p>About Page</p>');
    res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

// 404 page - always at the bottom
app.use( (req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname})
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})