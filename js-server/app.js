const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app initialisation
const app = express();

// connect to MongoDB
const dbURI ="mongodb+srv://koimettb:1738@nodejstuts.rmg3aqa.mongodb.net/?retryWrites=true&w=majority&appName=nodejstuts";
mongoose.connect(dbURI)
  .then((result) => console.log("connected to database"))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// middleware and static - for all req including post
app.use(express.static("public"));
app.use(morgan("dev"));

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
