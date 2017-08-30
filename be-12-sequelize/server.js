const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');
const Sequelize = require('sequelize');

const server = express();

server.engine('mustache', mustache());
server.set('views', './views');
server.set('view engine', 'mustache');
// now we can access req.body from forms!
server.use(bodyparser.urlencoded({ extended: true }));

/************ DOG SCHEMA ************/


const db = new Sequelize('puppycare', 'luke', '', {
    dialect: 'postgres',
});

const Dog = db.define('dog', {
    name: Sequelize.STRING,
    breed: Sequelize.STRING,
    weight: Sequelize.INTEGER,
    checked_in: Sequelize.BOOLEAN,
});

// Sychronize the 'dog' schema with the database, meaning make
// sure all tables exist and have the right fields.
Dog.sync().then(function () {
    console.log('dog model syncd');

    // Dog.create({
    //     name: 'Rascal',
    //     breed: 'Chocolate lab',
    //     weight: 34,
    //     checked_in: true,
    // });
});


/************* /DOG SCHEMA ***********/

server.get('/', function (req, res) {
    // Get all dogs and render them on the page.
    // Dog.findAll({ 
    //     where: {    // this is really powerful (there are lots of things
    //                 // you can do here). 
    //         checked_in: true
    //     }
    // }).then(function (pups) {
    //     res.render('list', {
    //         dogs: pups, // todo: get info from database
    //     });
    // });

    Dog.findAll().then(function (pups) {
        res.render('list', {
            dogs: pups, // todo: get info from database
        });
    });
});

// Task #1: add a new dog to the database via a form
server.get('/add', function (req, res) {
    res.render('add');
});

server.post('/dog', function (req, res) {
    Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        weight: parseInt(req.body.weight),
        checked_in: false,
    }).then(function () {
        // Wait until insert is finished, then redirect.
        res.redirect('/');
    });
});

// Task #2: toggle their checked in status
server.post('/checkin/:dog_id', function (req, res) {
    const id = parseInt(req.params.dog_id);

    // update(what-to-update, which-to-update)
    Dog.update({ 
        checked_in: true 
    }, {
        where: {
            id: id,
        },
    }).then(function() {
        res.redirect('/');
    });
});

server.post('/checkout/:dog_id', function (req, res) {
    const id = parseInt(req.params.dog_id);

    // update(what-to-update, which-to-update)
    Dog.update({ 
        checked_in: false 
    }, {
        where: {
            id: id,
        },
    }).then(function() {
        res.redirect('/');
    });
});

server.listen(3027);