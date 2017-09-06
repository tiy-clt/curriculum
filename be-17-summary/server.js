
/**
 * Module: another thing of code that we can reference from other
 * things of code.
 * 
 * The benefits of modules are similar to the benefits of functions.
 */

const express = require('express'); // import a module (from npm)
const routes = require('./routes'); // import a module (locally)

// Create our server
const server = express();

// Set up routes
routes(server);

server.listen(5671);