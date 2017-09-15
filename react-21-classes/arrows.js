
// Arrow functions are an alternative way to write functions.

function capitalize(name) {     // name and parameter list
    return name.toUpperCase();  // body and return value
}

let capitalize = name => name.toUpperCase();
let noInputs = () => 5;

function add(x, y) {
    return x + y;
}

let add = (x, y) => x + y; // arrow function equivalent

let hardFunction = (x, y, z) => {
    let sum = x + y + z;
    return sum / 2;
}

