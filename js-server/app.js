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
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save()
    .then((result) =>{
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) =>{
      res.send(result)
    })
    .catch((err) =>{
      console.log(err)
    })
})

// get handlers
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// redirect
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// 404 page - always at the bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
