/**
 * Mongodb data
 * 
 * Databases: store all information related to a site / project
 * Collections: users, items, orders
 * Documents: individual records
 * 
 * Using a database requires us to:
 *  - connect to the database
 *  - specify what collections we're looking in
 *  - write code using insert() and find()
 */

let mongo = require('mongodb').MongoClient;

// URL is "mongodb://localhost:27017/<db-name>"
mongo.connect('mongodb://localhost:27017/test', function (err, db) {
    // Use the admin database for the operation
    const items = db.collection('items');

    items.insert({ name: 'Another great food' });

    items.find({ name: 'Another great food' })
        .toArray()
        .then(function (items) {
            console.log(items);        
        });
});