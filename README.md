# 🟢 Node.js, Express, and MongoDB – Summary Notes

---

## 1. Running Code in Node

- Use `node <filename>` to run JS code in the terminal.

---

## 2. The Global Object

- Access to built-in objects and methods like:
  - `console`
  - `setTimeout`, `setInterval`
  - `__dirname`, `__filename`
  - `process`

---

## 3. Modules

- CommonJS modules (`require`)
- Split code into reusable files/modules

---

## 4. File System (FS)

> Import with:

```js
const fs = require('fs');
```

### File Operations

- **Read a file**: `fs.readFile(path, callback)`
- **Write a file**: `fs.writeFile(path, data, callback)`
- **Create/Delete directories**:
  - `fs.mkdir(path, callback)`
  - `fs.rmdir(path, callback)`
- **Delete files**: `fs.unlink(path, callback)`

---

## 5. Streams and Buffers

- **Streams**: Work with data as it is loaded (e.g., large files).
- **Buffers**: Temporary memory holding small chunks of data during streaming.

---

## 6. Clients and Servers (Networking Basics)

- **IP Addresses**: Unique network identifiers.
- **Domains**: Human-readable names mapped to IPs.
- **Ports**:
  - Server and client communicate via port numbers.

### Response Object in Node.js

- **Status Codes**:
  - `200`: OK
  - `301`: Resource moved
  - `404`: Not found
  - `500`: Server error

- **Redirect example**:

```js
case '/about-me':
  res.statusCode = 301;
  res.setHeader('Location', '/about');
  res.end();
  break;
```

---

## 7. NPM (Node Package Manager)

- Install libraries/frameworks:
  - `npm install <package>`
  - `nodemon` for live server reloads during dev

### `package.json`

- Tracks project metadata and dependencies.
- Create with: `npm init`
- Install dependencies from a cloned project with:

```bash
npm install
```

---

## 8. Express.js

- Simplifies HTTP server and routing.

### Setup

```js
const express = require('express');
const app = express();

app.listen(3000);
```

### Basic Usage

- `app.get(path, callback)`
- `app.use(middleware)`
- `res.sendFile()`
- `res.redirect()`

---

## 9. View Engines (EJS)

- Allows **server-side rendering** of dynamic content.

### Setup

```js
app.set('view engine', 'ejs');
app.set('views', 'my-views-folder'); // optional if custom folder
```

### EJS Syntax

```ejs
<% const name = "Benjie" %>
<p><%= name %></p>
```

### Partials

- Reusable components (e.g., `head.ejs`, `nav.ejs`).
- Include with:

```ejs
<%- include('partials/header') %>
```

---

## 10. Middleware

> Code that runs between receiving a request and sending a response.

### Examples

- Logger
- Authentication
- Error handling
- Serving static files:

```js
app.use(express.static('public'));
```

### Using `next()`

```js
app.use((req, res, next) => {
  console.log('Request received');
  next(); // continue to next middleware/route
});
```

### Third-party Middleware

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

---

## 11. MongoDB + Mongoose

- MongoDB = NoSQL DB (Documents & Collections).
- Mongoose = ODM (Object Data Mapper) for MongoDB.

### MongoDB Atlas (Cloud DB)

- Create a cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Get your connection string.

### Setup

```bash
npm install mongoose
```

```js
const mongoose = require('mongoose');

mongoose.connect('<connection-string>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected'))
.catch(err => console.log(err));
```

### Mongoose Models

```js
// models/blog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  snippet: String,
  body: String
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
```

---

## 12. MongoDB Routes (Sandbox Testing)

```js
// Add a blog
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'New Blog',
    snippet: 'This is a test blog',
    body: 'More about this blog...'
  });

  blog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// Get all blogs
app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// Get a single blog by ID
app.get('/single-blog', (req, res) => {
  Blog.findById('PUT-ID-HERE')
    .then(result => res.send(result))
    .catch(err => console.log(err));
});
```

---

## 13. Rendering MongoDB Data to Views

- Use `.render()` and pass MongoDB data as an object:

```js
app.get('/blogs', (req, res) => {
  Blog.find()
    .then(result => res.render('index', { title: 'All Blogs', blogs: result }))
    .catch(err => console.log(err));
});
```

---
