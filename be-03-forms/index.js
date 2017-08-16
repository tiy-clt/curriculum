const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');

const server = express(); // setup the express server

const donuts = [
  { name: 'Jelly', cake: 'vanilla', topping: 'jelly' },
  { name: 'Chocolate', cake: 'vanilla', topping: 'oranges' },
  { name: 'Glaze', cake: 'vanilla', topping: 'jelly' },
];

// Configure express to use mustache and set some reasonable defaults.
server.engine('mustache', mustache());
server.set('views', './templates');     // where to look for templates
server.set('view engine', 'mustache');  // what do we use to render them?

server.use(bodyparser.urlencoded({ extended: false }));

// Display a form
server.get('/', function (req, res) {
  // Load the index Mustache template and populate it with values
  // from the object.
  res.render('form', {
    options: donuts,
  });
});

server.post('/new', function (req, res) {
  // Validation
  if (
    req.body.name.length > 0 &&
    req.body.cake.length > 0 &&
    req.body.topping.length > 0
  ) {
    // get the form info
    // add it to the array
    donuts.push({
      name: req.body.name.toUpperCase(),
      cake: req.body.cake,
      topping: req.body.topping,
    });
  }

  // re-render the form
  res.render('form', {
    options: donuts,
    success: true,
  });
});

// TODO: Receive form info
server.listen(3003, function () { // 1024 and below are off limits
  console.log('Donuts are warm.');
});