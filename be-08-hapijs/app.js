const hapi = require('hapi');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

//////// SCHEMA ////////

const candySchema = new mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
});

const Candy = mongoose.model('Candy', candySchema);

/////// END OF SCHEMA /////////

const server = new hapi.Server(); // const app = express()
server.connection({
    host: 'localhost',
    port: 3000,
    routes: {
        cors: true, // allow others to use our api (not just our domain)
    },
}); // sets up the connection, does NOT start listening

// TODO: set up all routes
server.route({          // app.get('/', function ......)
    method: 'get',
    path: '/',
    handler: function (req, res) {
        Candy.find().then(function (candies) {
            res(candies);    // res.render('index', candies);
        });
    },
});

server.route({
    method: 'post',
    path: '/add',
    handler: function (req, res) {
        // candy.push(req.payload);    // payload = body
        Candy.create({
            name: req.payload.name,
            calories: req.payload.calories,
        });

        // TODO: what if i don't send calories?

        return res();
    },
});

// Start waiting for connections
server.start();     // server.listen()