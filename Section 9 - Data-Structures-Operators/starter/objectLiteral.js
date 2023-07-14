const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Here we can instead of manually writing weedays..we can compute them..

const openingHours = {
  [weekDays[2]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// So properties are inside the square brackets and in that we have weekDays
console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Default way of adding object literals -
  // openingHours: openingHours,
  // Es6 version of writing object literals
  openingHours,
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // Baiscally if you wana access properties inside the methods we use..the 'this' keyword!
  // }, (Normal way of creating object literals)

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // Baiscally if you wana access properties inside the methods we use..the 'this' keyword!
  }, // New way of writing object literals
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
};

// Object Literals -
// In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces. Those values can be properties and functions.

// So its simply just an object with curely braces. So here we have a restaurant object which again is itself an object literal.
// Now we can do many things with this obj literal..

// Now lets say we wanna access this opening hours object which is inside the restaurant object from soemwhere else..

// So here we have opening hours object seperatly..
// Now lets say we wanna add this openingHours object in the restaurant object..
// Now a basic way to do this is..(Line 34);

// We also have more enhanced way to do this..
console.log(restaurant);

// SO in these new version of Enhanced Object literals..we can add new objects inside a parent object in a simpler way..
// Next we can create methods without using the function keyword..(See lines 30 to 35)

// Next we can compute property names of the object literals..
// Eg: We want to compute opening hours prop..
