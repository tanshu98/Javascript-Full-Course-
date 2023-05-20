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

// Object Destructuring - We use curely braces
// Here..we use property names for destructing..Also in objects..remember..oder of elemnts does not matter
// So here basically we use property names of objects as variable names

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

// Default Values

const { menu = [], starterMenu: starters = [] } = restaurant; // Here in the restuarent object..we dont have a prop called as menu
console.log(menu, starters);

// Mutating Variables(Switch Values) -

let a = 111; // We have to make a = 456
let b = 121; // b = 578

const obj = { a: 456, b: 578, c: 900 };

console.log(obj);
({a,b}) = obj;
// Reliving letter..expirenece letter..
// full and final settlement
