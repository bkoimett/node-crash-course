const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const Blog = require('./models/blog');
const { result } = require("lodash");

// express app initialisation
const app = express();

// connect to MongoDB
const dbURI ="mongodb+srv://koimettb:1738@nodejstuts.rmg3aqa.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodejstuts";
mongoose.connect(dbURI)
  .then((result) => app.listen(3000) && console.log('connection successful !')) // only listen if connection is made
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware and static - for all req including post
app.use(express.static("public"));
app.use(express.urlencoded( {extended: true} ))
app.use(morgan("dev"));


// routes
app.get("/", (req, res) => {
  res.redirect('/blogs');
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.get('/blogs/:id', (req,res) => {
  const id = req.params.id

  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog Details'})
    })
    .catch((err) => {
      console.log(err)
    })
  //console.log(id)
})


app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
      console.log(err)
    })
})

// method handlers

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body)
  
  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => {
      console.log(err);
    })
})

// redirect
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// 404 page - always at the bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
