
// express, mustache, mongoose / mongo, bodyparser, session, bluebird
// bluebird: library for promises

// 1. load our database
// 2. showing the list of items
// 3. details page
// 4. basic cart working (adding and displaying)
// 5. search if we're still having fun

const express = require('express');
const session = require('express-session');
const mustache = require('mustache-express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
// import the model from the schema we set up
const Item = require('./item.schema');

const server = express();

// Set it all up
server.engine('mustache', mustache());
server.set('views', './templates');     // need a templates directory
server.set('view engine', 'mustache');
server.use(session({
    secret: 'ho35lh7rehi,yserh,xuybl4ahuherga',
    resave: false,
    saveUninitialized: true,
}));

mongoose.connect('mongodb://localhost:27017/items');

mongoose.Promise = bluebird;

// Set up routes
server.get('/', function (req, res) {
    Item.find().then(function (results) {
        let cartCount = 0;

        if (req.session.cart !== undefined) {
            cartCount = req.session.cart.length;
        }

        res.render('search', {
            items: results, // data from the database
            cartCount: cartCount,
        });
    });
});

server.get('/details/:item_id', function (req, res) {
    //      ^ route param called 'item_id'
    const id = req.params.item_id;

    Item.findOne({
        _id: id,
    }).then(function (result) {
        res.render('details', {
            item: result, // result from the database
        });
    })
});

server.get('/cart', function (req, res) {
    res.render('cart', {
        items: req.session.cart,
    });
});

server.post('/cart/:id', function (req, res) {
    if (req.session.cart === undefined) {
        req.session.cart = [];
    }

    // get the item represented by this id
    Item.findOne({
        _id: req.params.id,
    }).then(function (thingy) {
        // add it to req.session.cart (an array)
        req.session.cart.push(thingy);

        res.redirect('/');
    });
});

// go go go go go
server.listen(3050);