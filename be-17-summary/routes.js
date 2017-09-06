const bakery = require('./bakery');

// A function that sets up a bunch of routes on an express app.
function createRoutes(app) {
    app.get('/cakes', function (req, res) {
        // stuff here

        bakery.getAllCakes().then(function (cakes) {
            res.json(cakes);
        });
    });

    app.get('/cakes/:cake_id', function (req, res) {
        res.send();
    });

    app.get('/cakes/:cake_id/ingredients', function (req, res) {
        res.send();
    });

    app.get('/cakes/:cake_id/ingredients/:ingredient_id', function (req, res) {
        res.send();
    });

    // Buy a cake
    app.post('/cakes/:cake_id', function (req, res) {
        res.send();
    });
};

module.exports = createRoutes;