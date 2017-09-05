/**
 * API's: Best Practices
 * 
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

const names = [
    'Janet',
    'Fran',
    'Thomas',
    'Hero',
    'Sampson',
    'Todd',
    'Priscilla',
];

// Creating an 'endpoint' or 'route' that will respond with a bunch of 
// default headers.
server.get('/items', function (req, res) {
    res.json(names);
});

server.get('/items/:item_id', function (req, res) {
    const index = parseInt(req.params.item_id);

    res.json(names[index]);
});

server.post('/items/:item_id', function (req, res) {
    const index = parseInt(req.params.item_id);
    const text = req.body.next;

    names[index] = text;
    res.send();
});

server.delete('/items/:item_id', function (req, res) {
    const index = parseInt(req.params.item_id);

    names.splice(index, 1);
    res.send();
});

// https://www.google.com/search?source=hp&q=cornbread&oq=cornbread&gs_l=psy-ab.3..0i131k1j0j0i131k1j0.314.1115.0.1288.10.9.0.0.0.0.117.677.7j1.8.0....0...1.1.64.psy-ab..2.8.676.0.obh42KgS22A

server.listen(3030);