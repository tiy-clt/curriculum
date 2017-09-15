
// Creating a class creates a new type of thing (similar to
// constructors from yesterday).

// module.exports = Store;
export class Store {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('welcome to ' + this.name);
    }
}