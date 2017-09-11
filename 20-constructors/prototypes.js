
/**
 * Let's create a set of types that do the following:
 *  - Shop (generic)
 *  - Restaurant
 *  - Shoe store
 *  - Used car store
 */

function Shop() {}

Shop.prototype.printBill = function () {
    console.log('You owe me money');
};

function Restaurant(name, category) {
    this.name = name;
    this.category = category;
    this.rating = 4;
}

// Restaurant.prototype = new Shop();
Restaurant.prototype = Shop.prototype;

function ShoeStore(name) {
    this.name = name;
}

ShoeStore.prototype = Shop.prototype;

const breakfast = new Restaurant('Waffle House', 'delicious');
const lunch = new Restaurant('Subway', 'sandwiches');
const shoeShack = new ShoeStore('Shoe Shack');

breakfast.printBill();
lunch.printBill();
shoeShack.printBill();
