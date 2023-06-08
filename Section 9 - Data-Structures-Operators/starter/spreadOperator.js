'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

// Funciton call,
restaurant.orderDelivery({
  time: '22:30',
  address: 'Pune, Maharashtra',
  starterIndex: 2,
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// These concepts will be really uselful in dealing with API's

// Now lets say we want to change the variable names..i/e we dont want them to be same as property names..
// For tht we can do this -

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Spread Operator: We can use the spread operator to basically expand an array into all its elements. So basically unpacking all array eleemnts at one

const arr = [1, 2, 4];
// Suppose i wanna create a new array by using prev array..and then i'll add some new elements to it..
// SO manually we can do it like-
const badNewArr = [23, 45, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Now we can do the same operation more convinenty using SPREAD OPERATOR
const newArr = [1, 3, ...arr];
console.log(newArr);

// Spread operator basically takes all the elements out of the array and writes them manually ..i.e baiscally it unpacks all the array elements..
// So we can use this spread operator whenever we would otherwise write multiple values seperated by commas..so this mainly happens whenever we write an array literal
// SO we can again expand newArray using the spread operator
console.log(...newArr);
// So whenver we need the elemnts of array individually then we can use the spread operator
// 2nd situation is when we pass arguments into function

const newMenu = [...restaurant.mainMenu, 'Burger']; // creating a new menu
console.log(newMenu);

// The big difference between the spread operator and destructuring is that spread operator takes all the elements from the array and it also doesnt create new variables
// And as a consequence we can only use it in a places where we would otherwise write values seperated by commas

// 2nd use case of Spread opertor-
// Copy array -

const copyMainMenuArr = [...restaurant.mainMenu];
console.log(copyMainMenuArr);

// Merge 2 arrays or more together

const menuArr = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuArr);

// Now the spread operator works on all the iterables
// Iterables - arrays, strings, maps, sets but not OBJECTS!
// BUT ALSO REMEBER: We can only use the spread operator when building an array or when we pass values into a function:)

const str = 'Tanshu';
const arrTanshu = [...str, 'A']; // Here we are applying the spread operator again inside an array
console.log(arrTanshu);
console.log(...arrTanshu); // Here we are applying the spread operator inside a console.log function

// The spread operator wont work in template literal
// console.log(`${...str} Allewar`); // It gives error as unexpected Token
// It wont work because the spread operaor expects mutiple values seperated by commas..and since  we cannot write them inside the template literal..hence it gives us the error!

// Now we goona create a function  and then we will use the spread operator to pass values into the function
// So we have create a orderPasta function..

// const ingredients = [
//   prompt('Lets make Pasta! Ingredient1?'),
//   prompt('Ingredients 2?'),
//   prompt('Ingredient 3?'),
// ];
const ingredients = ['a', 'b', 'c'];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Since ES6 2018, spread operator also works on objects eventhough its not an iterable

// Objects -

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Tanshu' };
console.log(newRestaurant);

// Copy objects

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Tanshu's restaurant";
console.log(restaurantCopy.name, restaurant.name);

// Rest Pattern and Paramters -

// Rest pattern has same syntax and looks exactly as the spread operator but it actually does the opp of the spread operator

// Now we used the spread operator to build new arrays or to pass multiple values into a function - 2 use cases of the spread operator!
// So in both these cases we used the spread operator to expand an array into individual elements

// Now the rest pattern uses the same syntax, however to collect multiple elements and condense them into an array!
// So spread operator is used to unpack an array while the rest is used to pack elements into an array

// 1) DESTRUCTING -
// SPREAD operator because its on RIGHT SIDE of =
const arr1 = [1, 2, ...[3, 4]]; // Unpacked all the individual elements and stored them in a arr1 variable;
console.log(arr1);

// REST operator because its on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b, others);
// So here the 1st and 2nd elements are stored in a and b variables..and the rest pattern..so its called rest becoz it will take the rest of the elements i.e remaining array elements and then put them into a new array
// SO the rest pattern basically collects the elements that are usused in the destructuring assignment

// Eg - 2:

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// So here we get pizza, risotto and then the rest of the elments that we didnt select prev into their own variables
// Note: The rest syntax collects all the array elements after the last variable. So remember it does not include any skipped elements
// Hence the rest pattern should always be written in the end of the destructing assignment
// And so for the same reason there can be only one rest in the destructing assignment

// Objects -
// Now here the rest of the elements are obv collected in a new object not an array!

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) FUNCTIONS -

// In the spread operator we had an obj.,and then we expanded that obj using the spread operator and then passed the obj elements as arguments inside the function

// Rest Paramters - When we use the rest pattern inside the functions it is called as rest paramters
// SO here also rest paramter does the opposite of spread operator
// Rest syntax is taking multiple numbers or values and then packs them into an array

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 4);
add(3, 5, 6, 7);
add(4, 7, 8, 9, 12, 5, 2);

const x = [8, 23, 12, 10];
add(...x);

restaurant.orderPizza('Mushroom', 'Cheese', 'Olive', 'Spinach');
