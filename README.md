# Run code in node

# Global object

- objects and methods available

# Modules

# File Systems

> Import core module (const fs = require("fs"))

- read
- write files :
- directories
- delete files

# Streams and Buffers

- **streams** - using data, before it has finished loading
- **buffer** - a temporary memory storage for small bits of data (streaming services)

## **3. Clients and Servers**

- Ip addresses and Domains
- ports and port number
  -server
  -client

> Response object

- res headers
  > Returnning html docs
- > Response status code
- type of reponse sent to browser

200 - ok
301 - resource moved
404 - not found
500 - internal server

100 - informational res
200 - success codes
300 - codes for redirects
400 - user or client error codes
500 - server side error codes

> redirects

        case '/about-me':
            res.statusCode = 301
            res.setHeader('location', '/about')
            res.end()
            break

## NPM

- installing libraries, frameworks and packages
  eg - lodash/ nodemon - dvp workflow (live reload server)

# package.json File

- keeps track of project details, packages etc
- npm init (agree to everything)
- package loc- dont edit/just stores versions

# dependencies

- just type

```bash
> npm install
```

this installs all dependencies
start with this when you get a js project from online

## 6. Express apps

- easily manage routing, requests

> Creating an Express App

- create new file (app.js)
- require 'express'
- create app instance
- create instance to listen to requests
- app.get('<root>', (req, res)) -
- app.use() -middleware (should go at the very bottom)
- fires always: if no request matches user request, we execute it. otherwise ikimatch, inaacha kuenda down the page.
- res.sendFile()
- res.redirect()

## 7. View Engines 🪟

- static : doesnt change
  -p dynamic : ever changing

- use a **view engine** : inject dynamic data into them (eg) express handle bar, ejs etc.

> EJS

- install
- register : app.set ('view engine', 'ejs') - application settings
- app.set('views', 'my views folder')
- ejs - creates template (checks view folder automatically)
- create index.ejs view

> passing data into views

- ejs tags ---> <% const name = "Benjie" %>
- calling <p><%= name %></p>
- runs as js in server

- add object as parameter in response render
- add ejs tag to the ejs file where it should show the dynamic code
- **server side rendering** - the process of processing ejs templates through a view engine on a server to diplay valid html with dynamic content.

> Partials

- these are reusable ejs files that are extracted from common code across the board
- create partials folder/ add the ejs partials files/ cut and paste the codeblocks from the main ejs files into the
  partials
- use **include statement** - <%- include('file_path')%> to where the partials need to appear in the html

> adding css

- for now add to head.ejs as in-document styling

## 8. Middleware

- Code which runs (on the server) between getting a request and sending a response.
- app.use() / app.get(for routes)

> Middleware examples
- logger middleware(log req details)
- authentication check middleware
- json-parsing middleware (from req)
- return 404 pages (app.use)

> Next()
- indicates complition of middleware handling and prompts
server to move on to the next code
- added as a middleware paremeter and called there too

``` js
app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host", req.hostname);
  console.log("path", req.path);
  console.log("method:", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("2nd middleware fired");
  next();
});
```


> 3rd party middleware
- download from npm website 
- require it
- invoke with either options as parameter 

``` js
app.use(morgan('dev'))
```

