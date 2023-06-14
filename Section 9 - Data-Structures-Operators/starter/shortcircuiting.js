const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // Baiscally if you wana access properties inside the methods we use..the 'this' keyword!
  },
  // orderDelivery: function (obj) { // Before destructuring
  //   console.log(obj);
  // },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // Default values
    // After destructuring
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your delicious pasta is here with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// Logical Operators -

console.log(1 || 'Tanshu'); // 1

// Here there r 2 values that are not boolean..right!

//SO here..in the casse of logical operators..they can use any datatypes, return any data type..and perform something called as short ciruiting! ( Short-circuit-evaluation)

// Short ciruiting in OR Opertor -
// - IN the case of OR operator, Shortciruiting means tht if the 1st value is a truthy value it will immedialty return that 1st value. And so if the 1st value is a truthy value..then the other operand will not even be evaluated..
// SO hence it return 1 which is a truthy value
console.log('' || 'Tanshu'); // Falsy vaue, Turthy value - Tanshu
console.log(true || 0); // Note: '', 0, undefined, null, 0 are all falsy values
console.log(undefined || null); // here it will return null becoz the 1st value is a falsy value..2nd is also a falsy value but js will just return null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is returned

// Practical ex of Shortcircuiting -

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant : 10;
// console.log(guests1);

// What we are trying is to set default values uisng the ternary opertor!
// Now we can actually make it much simpilar using the shortcircuiting method!

// Eg

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Shortcicuiting in AND Operator -
// AND Operator works in opp to OR operator
// AND Operator short ciruits when the 1st value is falsy value and then it immedialty return the falsy vaue without evauationg the 2nd operand
console.log('------AND-------');

console.log(0 && 'Tanshu');
// Here 0 is a falsy value..and So AND operator returns back 0;
console.log(8 && 'Tanshu');
// Here, 8 is a truthy value..hence the evaluation contiues and it retunrns the last value

console.log('Hello' && 23 && null && 'Tanshu'); // null

// Practical Example -

// write a code to check if a particular given method exists or not

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Spinach');
} // Normal code

// We can do the same by using short circuiting in And operator

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach'); // Here,if the 1st value is false, then the entire operation will become false..and hence the function will then get called..
// If its true the function will definatley get called

// Conclusion -

// OR Operator - This will return the 1st truthy value of all the operands or simply the last value if all of them are falsy
// AND Operator - This operator will return the 1st falsy value of all the operands or the last value if all of them are trurthy

// Practical Applications - We can use OR opertor to set default values and we can use the AND Operator to execute the code in the 2nd operand if the 1st value is true!
