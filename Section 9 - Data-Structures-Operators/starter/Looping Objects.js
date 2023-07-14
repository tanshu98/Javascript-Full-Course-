const openingHours = {
  Thu: {
    open: 12,
    close: 22,
  },
  Fri: {
    open: 11,
    close: 23,
  },
  Sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
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
};

// Now we have used for of loop to loop over arrays which are iterable and we will also understand how to loop for objects which are non-iteralble but in an indirect way!

// So here..we are not looping over the object itself..
// We will be looping over array

// Property Names -

const properties = Object.keys(openingHours);
console.log(properties); // Here we get an array..if 3 property names

let openStr = `We are open for ${properties.length} days : `;

for (const days of properties) {
  openStr += `${days},`;
}

console.log(openStr);

// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Property Values -

const values = Object.values(openingHours);
console.log(values);

// Entire Object i.e (key and value)- We use entries method..

const entries = Object.entries(openingHours); // This will give me an entire object
// console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}

// Op -
// [ 'Thu', { open: 12, close: 22 } ] - [Key, {open, close}]
// [ 'Fri', { open: 11, close: 23 } ]
// [ 'Sat', { open: 0, close: 24 } ]

// So here also we have used destructuring...
