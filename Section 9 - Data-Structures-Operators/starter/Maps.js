const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
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

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Maps - A map is a datastructure that we can use to map values to keys
// SO just like objects, data is stored in key - value pairs in Maps also..
// In Objects, the keys are always strings
// Now the difference between Maps and Objects is that, in Maps..keys can have any type..
// IN Maps, keys can be objects, arrays,strings or basically any type

const rest = new Map(); // First we create a empty Map using constructor new Map!
// Then to fill up the map, we use the set Method

rest.set('name', 'Classicano Italino');
// Now this set method..is similar to the add method in the sets..Both allow us to add an element into the data structure!
// Now in the set Method.. we are passing in 2 arguments, Key name and its value!

// Now remeber..we can use any data  type we want..so..
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// Now calling the set method..does not only update the map that its called on..but it also returns the map
// Now the fact that..the set method actually returns the updated map allows us to chain the set method!

rest
  .set('catorgories', ['Ialian', 'Pillezerian', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// In order to read data from a map, we use the get method!

console.log(rest.get('name')); // Here..inside the get method..we pass in the key..

console.log(rest.get(true)); // SO remeber..the data types of key matters!

// Eg:

const time = 21;
// If the time is between 11 and 23..we are open else..closed!
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// Operations performed using Maps -

// 1. Set , 2. Get
// 3. has - This checks if a particular element is present or not!
console.log(rest.has('catorgories')); // true

// 4. delete -
console.log(rest.delete(2)); // Based on the key
console.log(rest);

// Now comparing this to objects, we can also delete properties from objects uisng something called the Delete Operator, but thats a really slow process and usually its not encourged!
// Also..objects also have a prop called as HasOwnProperty() , this we will dicuss in the OOPs concept section!

// 5. clear - Delete all the elments from the Map

// rest.clear();
console.log(rest);

// 6 - Size

// console.log(rest.size); // 7

// Using Arrays or Objects as Map keys -

// rest.set([1, 2], 'Test');
// console.log(rest);

// If i want to get the test from key of array elements..
// console.log(rest.get([1, 2])); // Undefined!
// Here we are trying to get the value of key of array elements..Now since these array elements are actually at different locations in the memory..hence it gives us undefined!
// Now to actually get the Test value..we need to craeate an array..and stor the keys in that array..Like that..the array which we have create will point to the same memory location, and hence it wont give us undefined!

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); //Test

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get('h1'));

// MAP ITERATIONS -

// NOw there is another way of adding elements in the Maps..

const question = new Map([
  ['question', 'Which is the best Programing Language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct Ans 🎉'],
  [false, 'Please try again!'],
]);

console.log(question);

console.log(Object.entries(openingHours));

// Convert object to Map

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// So remeber..we use object.entries to get key and  values fromm the object..
// If we only want..key..we use object.key(object_name) and if only value, object.value(object_name);

// SO here the hoursMap is now a Map

// Iteration in the Map..

// Map is a iterable..And so since we have converted the object into map..we can directly loop using for loop..we dont have to use object.entries(object_name)..

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// answer === 3..true

// console.log(question.get(question.get('correct') === answer));

// ALternative Answers -

// console.log(question.get(3 === answer));

// Map to Array
console.log(question);
// console.log([...question]); // we are unpacking values inside an array..so map becomes an array!

// We also have same properties as arrays in Maps too..

// console.log([...question.entries()]);
console.log(question);
console.log([...question.values()]); // values
console.log([...question.keys()]); // keys
