const express = require('express');
const mustache = require('mustache-express');
const mongo = require('mongodb').MongoClient;
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

// connect
// select collection
mongo.connect('mongodb://localhost:27017/test', function (err, db) {
    const items = db.collection('items');

    // List all of the foods
    app.get('/foods', function (req, res) {
        // Get data from mongo
        // list it using mustache

        items.find().toArray().then(function (items) {
            res.render('foods', {
                noms: items, // we can now use 'noms' in our mustache template
            });
        });
    });

    app.post('/search', function (req, res) {
        const query = req.body.search_text;

        // Using a 'regular expression' here - we'll talk in detail about them
        // later - big idea is find strings that include the substring 'query'.
        items.find({ name: new RegExp(query) }).toArray().then(function (items) {
            res.render('foods', {
                noms: items, // we can now use 'noms' in our mustache template
            });
        });
    });

    app.listen(3000);
});

