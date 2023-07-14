const openingHours = {
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

console.log(restaurant);
// For of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// We can also get the index values with the elements

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }

// console.log([...menu.entries()]);

// We can apply destructing in line 58 to 60

for (const [i, el] of menu.entries()) {
  // destructing operation performed!
  console.log(`${i + 1} : ${el}`);
}
