const express = require('express')

// express app initialisation
const app = express()

// register view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3000)



// get handlers 
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get("/about", (req, res) => {
    res.render('about.ejs')
});

app.get('/create', (req, res) => {
    res.render('create.ejs')
})



// redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

// 404 page - always at the bottom
app.use( (req, res) => {
    res.status(404).render('404')
})