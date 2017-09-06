// Any time we're messing with cakes, that code should live
// here. Any sort of database interactions should go here.
const Sequelize = require('sequelize');

const db = new Sequelize('bakery', 'luke', '', {
    dialect: 'postgres',
});

const Cake = db.define('cake', {
    name: Sequelize.STRING,
    servings: Sequelize.INTEGER,
    shelfLife: Sequelize.INTEGER, // in days
});

Cake.sync();

function getAllCakes() {
    return Cake.findAll();
}

function addFakeCake(name) {
    return Cake.create({
        name: name,
        servings: 12,
        shelfLife: 3,
    });
}

function begoneCake(id) {
    return Cake.destroy({
        id: id,
    });
}

module.exports = {
    getAllCakes: getAllCakes,
    addFakeCake: addFakeCake,
    begoneCake: begoneCake,
};