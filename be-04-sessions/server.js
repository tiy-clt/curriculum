
// 1. We're going to make a web server for our twitter clone.
// 2. User login page (html and post request for login)
// 3. Home page

const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');
const session = require('express-session'); // new

const server = express();

const users = [
    { username: 'hamilton', password: 'america', logins: 0 },
    { username: 'jenna', password: 'icecreamc4k3', logins: 0 },
    { username: 'test', password: 'abc', logins: 0 },
];

const messages = [];

// Configure our server
server.use(bodyparser.urlencoded({ extended: false }));
server.use(session({
    secret: '98rncailevn-_DT83FZ@', // TODO: LUKE DONT FORGET
    resave: false,
    saveUninitialized: true
}));

server.engine('mustache', mustache());
server.set('views', './views')
server.set('view engine', 'mustache');

// Set up some routes
server.get('/', function (request, response) {
    response.render('login');
});

server.get('/home', function (request, response) {
    if (request.session.who !== undefined) {
        response.render('home', {
            username: request.session.who.username,
            loginCount: request.session.who.logins,
            messages: messages,
        });
    } else {
        response.redirect('/');
    }
});

server.post('/message', function (request, response) {
    const message = request.body.msg;

    messages.push({
        text: message,
        sender: request.session.who,
    });

    response.redirect('/home');
});

server.post('/login', function (request, response) {
    // THIS IS NEW AND VERY IMPORTANT
    // request.session is an object where we can put information
    // that only applies to this session.

    const username = request.body.username;
    const password = request.body.password;

    let user = null;

    // 1. is the username real?
    // 2. if so, does the password match?
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username &&
            password === users[i].password) {
            user = users[i];
        }
    }

    if (user !== null) {
        request.session.who = user;
        request.session.who.logins++;

        response.redirect('/home');
    } else {
        response.redirect('/');
    }
});

// Run the server
server.listen(30000, function () {
    console.log('Tweeter');
});