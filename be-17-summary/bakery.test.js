
/**
 * This file's purpose is to test the functions in bakery.js.
 */
const bakery = require('./bakery');

// test() is a function provided by Jest. It takes two arguments.
// 1. description of what's being tested
// 2. the function to run to actually confirm whether it works
test('i get 3 cakes when i run getAllCakes()', function () {
    return bakery.getAllCakes().then(function (cakes) {
        expect(cakes.length).toBe(3); // the actual test
    });
});

test('i can create fake cakes', function () {
    return bakery.addFakeCake('Gooseberry').then(function (newCake) {
        expect(newCake.servings).toBe(12);
        expect(newCake.shelfLife).toBe(3);
        expect(newCake.name).toBe('Gooseberry');
    });
});

test('i can make and delete a cake', function () {
    let startingCakes;

    // at the beginning we have a length of x
    return bakery.getAllCakes().then(function (cakes) {
        startingCakes = cakes.length;

        // make a cake, length is x + 1
        bakery.addFakeCake('Coconut').then(function (newCake) {
            bakery.getAllCakes().then(function (cakes) {
                // There should now be one more cake than before.
                expect(cakes.length).toBe(startingCakes + 1);

                // delete a cake, length is x
                bakery.begoneCake(newCake.id).then(function () {
                    bakery.getAllCakes().then(function (cakes) {
                        expect(cakes.length).toBe(startingCakes);
                    })
                });
            });
        });
    })

});