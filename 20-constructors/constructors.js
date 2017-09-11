
// Constructors create new objects of a certain type.
// When a function is run with the `new` keyword, a few weird things happen.
//  1. `this` is set to an empty object.
//  2. The `this` object is automatically returned when the function ends.
function City(name, pop) {
    this.name = name;
    this.population = pop;
    // this.greetTourist = function () {

    // };
}

City.prototype.chargeTax = function () {
    console.log('A bunch of people owe us money.');
};

City.prototype.greetTourist = function () {
    console.log('Welcome to ' + this.name + '!');
    // this.chargeTax();
}

// Actual City objects
const firstOne = new City('Nashville', 1000);
const secondOne = new City('San Francisco', 15000);

// Generic object 'shaped' like a city.
const thirdOne = {
    name: 'Nashville',
    population: 100,
};

firstOne.greetTourist();
secondOne.greetTourist();


// console.log(firstOne);
// console.log(secondOne);
// console.log(thirdOne);