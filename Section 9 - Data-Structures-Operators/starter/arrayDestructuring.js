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

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// Array Destructuring - So its basically an ES6 feature. It basically is a way of unpacking values From an array or an object into seperate variables
// ie. Destructuring is to break a complex data structure down into a smaller data structure like a variable
// So for arrays we use destructuring to retrive elements from the array and store them into varibales in an easy way

const arr = [1, 2, 3];
// we retrive individual elements and store them in variables..
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// Now with destructuring we can declare all the 3 variables at the same time
const [x, y, z] = arr;
console.log(x, y, z);
// So remember..we are not destroying the array..we are just unpacking the values..Also the [] here is a destructring assignment not an array.. So when we write like in line 43..js engine knows that it has to perform destructing :)

const [first, second] = restaurant.categories;
console.log(first, second);

// Now lets say we wanted to skip an elemnt..or we wanted to get the 3rd element..so in that scenario..we leave a , in between the 2 elements..

// Eg:
let [main, , secondary] = restaurant.categories; // we are leaving space in between
console.log(main, secondary); // Italian Vegetarian

// Mutating Values -

// Now lets say i wanna switch variables..basically jo 1st variable ki value that will go to the 2nD and vice versa..
// now we can do this using the temp variable wala logic..
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

// Now switching the variable values using destructring -

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Next trick with Destructring  -
// We can have a function return an array and then we can immediately destruct the result into different variables. This basically allows us to return multiple values from a function

// Now execute the function
// console.log(restaurant.order(0, 2));
// Recieve 2 return values form a function
const [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse);

// Nested Destructuring
const nestedArray = [2, 4, [5, 6]];
// const [p, , q] = nestedArray;
// Lets say i wanted to get..2,5,6..
const [p, , [j, k]] = nestedArray; // This is destructuring inside destructuring
console.log(p, j, k); // 2,5,6

// Default Values

const [s = 1, r = 1, l = 1] = [8, 9];
console.log(s, r, l); // Obviously here l doesnt exists..so we are giving it a default value as 1
// So this is another great application for destructuring :)
