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

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open); // This here will give us an error..

// So here we are checking for various prop..if they are true..and then we will be getting the desired op..

// So if we have multiple nested objects..so to check for all these prop can get a bit messy..

// So ES2020..introduced a new feature called Optional Chaning
// And so with Optional Chaning, if a certain prop doesnt exists, then undefined is returned immediately..

// if (restaurant.openingHours.fri) {
//   console.log('fri', restaurant.openingHours.fri.open);
// }

// Syntax of Optional Chaning -

console.log(restaurant.openingHours.mon?.open); // Optional Chaning!
// Op - Undefined but remeber..it wont give us an error
// So here..if only mon exixts..this open prop will be read, if not then immedialty undefined is returned
// Also exists here means..if its not null or undefined
// So if its zero and empty string the prop still exists

// Now we can obv add more optional chaning -

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// // }

// So the code 77 to 79 has two prop which need to be checked..SO here also we can apply optional chaning..And again this makes our code really easy to write

console.log(restaurant.openingHours?.mon?.open);
// So this optional chaning is really useful and helps us in preventing lots of small small bugs

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //if we need to use the variable name as the property name, we have to use the bracket"
  console.log(`On this ${day} we ${open}`);
}

// Optional Chaning for Methods:-
// With the help of O.C..we can check if a method exists or not!

console.log(restaurant.order?.(0, 1) ?? 'This method doesnt exist!');
console.log(restaurant.orderMe?.(0, 1) ?? 'This method doesnt exist!');

// Optional Chaining - Arrays!
// We can use it basically to check if an array is empty

// const users = [{ name: 'Tanshu', email: 'tanshuallewar98@gmail.com' }];
const users = [];

console.log(users[0]?.name ?? 'Users Array is empty!');
