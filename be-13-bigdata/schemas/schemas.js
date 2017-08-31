const sequelize = require('sequelize');

module.exports = function (conn) {
    const City = conn.define('city', {
        name: sequelize.STRING,
    });

    const State = conn.define('state', {
        name: sequelize.STRING,
    });

    const Issue = conn.define('issue', {
        description: sequelize.STRING,
    });

    const Vote = conn.define('vote', {
        jumbled_user_id: sequelize.STRING,
        in_favor: sequelize.BOOLEAN,
        gender: sequelize.STRING,
        age: sequelize.INTEGER,
    });

    City.belongsTo(State);
    Vote.belongsTo(Issue);
    Vote.belongsTo(City);

    return State.sync()
        .then(() => City.sync())
        .then(() => Issue.sync())
        .then(() => Vote.sync())
        .then(() => {
            return { City, State, Issue, Vote };
        });
};



// ## Issues
// Tracks an individual issue that the voters get to decide on.

// `id`, `description`

// ## Votes
// A huge list of votes, each one representing a single vote from a person.

// `id`, `jumbled_user_id`, `in_favor`, `gender`, `age`, `issue_id`, `city_id`
