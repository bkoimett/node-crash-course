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