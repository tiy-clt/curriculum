const fs = require('mz/fs');
const Sequelize = require('sequelize');
const loadSchemas = require('./schemas/schemas');

const VOTERS_PER_CITY = 100;

const issues = [
    `All parents receive Friday's off.`,
    `Minimum wage should be $60.`,
    `We should build a new park downtown.`,
    `We should clean up the local ponds.`
];

function addCity(city, schemas) {
    return schemas.State.find({
        where: {
            name: city.state
        }
    }).then(state => {
        return schemas.City.create({
            name: city.city,
        }).then(c => c.setState(state));
    });
}

function makeVotes(city, schemas) {
    console.log(`Making votes for ${city.name}`)
    const voters = voterList();
    const random = () => {
        const i = Math.floor(Math.random() * voters.length);
        return voters[i];
    };

    // Load all issues, then generate votes for each.
    return schemas.Issue.findAll()
        .then(issues => {
            issues.forEach(async (issue) => {
                for (let i = 0; i < VOTERS_PER_CITY * 2; i++) {
                    const voter = random();

                    await schemas.Vote.create({
                        jumbled_user_id: voter.id,
                        in_favor: Math.random() > 0.5 ? true : false,
                        gender: voter.gender,
                        age: voter.age,
                    }).then(vote => {
                        vote.setCity(city)
                        vote.setIssue(issue);

                        return vote;
                    });
                }
            });

            return Promise.resolve()
                .then(() => console.log(`Done updating votes for ${city.name}`));
        }).catch(err => {
            console.error(err);
            process.exit(1);
        });
}

function voterList() {
    const voters = [];

    for (let i = 0; i < VOTERS_PER_CITY; i++) {
        voters.push({
            id: Math.random().toString(36).substring(7),
            gender: Math.random() > 0.5 ? 'male' : 'female',
            age: Math.floor(Math.random() * 70) + 15,
        });
    }

    return voters;
}

fs.readFile('cities.json')
    .then(resp => JSON.parse(resp))
    .then(cities => {
        const states = Array.from(cities.reduce((s, c) => s.add(c.state), new Set()));

        const db = new Sequelize('voting', 'luke', '', { dialect: 'postgresql' });

        // Load all schemas
        return loadSchemas(db)
            .then(schemas => { // add all issues
                console.log('adding issues to db');
                return Promise.all(issues.map(issue => {
                    return schemas.Issue.create({
                        description: issue,
                    });
                })).then(() => Promise.resolve(schemas));
            })
            .then(schemas => { // add all states
                console.log('adding states to db');
                return Promise.all(states.map(state => {
                    return schemas.State.create({
                        name: state,
                    });
                })).then(() => Promise.resolve(schemas));
            })
            .then(schemas => { // add all cities
                console.log('adding cities to db');
                return Promise.all(cities.map(city => addCity(city, schemas)))
                    .then(() => Promise.resolve(schemas));
            })
            .then(schemas => { // generate votes
                console.log('adding votes to db');
                return schemas.City.findAll()
                    .then(async (cities) => {
                        for (let i = 0; i < cities.length; i++) {
                            await makeVotes(cities[i], schemas)
                        }
                    });
            })
            .then(() => console.log('Dataset complete!'));
    }).catch(err => console.error(err));