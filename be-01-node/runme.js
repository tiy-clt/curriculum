/* Use a library to do 'special' stuff in Javascript */
const filesystem = require('fs'); // 'I need x to work'
const chalk = require('chalk');

// filesystem.writeFile('starting.json', JSON.stringify(users));

filesystem.readFile('starting.json', function (err, contents) {
    const peeps = JSON.parse(contents);

    for (let i = 0; i < peeps.length; i++) {
        const blueName = chalk.blue(peeps[i].name);
        const redPass = chalk.red(peeps[i].password);

        console.log(`User: ${blueName}, password: ${redPass}`)
    }
});