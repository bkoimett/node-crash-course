const express = require('express')

// express app initialisation
const app = express()

// listen for requests
app.listen(3000)

// get handler
app.get('/', (req, res) => {
    res.send('<p>Home Page</p>')   
})

app.get("/about", (req, res) => {
  res.send('<p>About Page</p>');
});