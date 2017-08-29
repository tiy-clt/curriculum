const mongoose = require('mongoose');
const Item = require('./item.schema');

// Import the array of items
const items = require('./items');

mongoose.connect('mongodb://localhost:27017/items')

// Add all of the items from items.js to the database.
for (let i = 0; i < items.length; i++) {
    Item.create(items[i])
        .then(function () {
            console.log(`Created item '${items[i].name}'`);
        });
}

// Close the connection when we're done.
mongoose.connection.close();