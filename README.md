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
 - **buffer**  - a temporary memory storage for small bits of data (streaming services)

## **3. Clients and Servers**

- Ip addresses and Domains
- ports and port number
-server 
-client 

> Response object
- res headers
> Returnning html docs
- 
> Response status code
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