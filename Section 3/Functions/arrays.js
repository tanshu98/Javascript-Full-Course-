const friends = ['Tanshu', 'Shrunkhala', 'Maryam']; // 1st way to declare an array..
// console.log(friends);
const games = new Array('COD','PUBG','GTA5');  // 2nd way to declare an array..
// console.log(games);

// console.log(friends[2]);

// console.log(friends.length); // 3

console.log(friends[friends.length-2]); // This is how we can print array values without using indexing..

friends[0] = 'Akshay'; // Here we can change the values as well
// console.log(friends);

// Note: Only primitive values are immutable..(Unchangable)
// But an array is not a primitive value..So hence we can change the array values..i.e mutate the values even though we have used const

// But see..we cannot change the entire array..which has been already declared..

// friends = ['abc', 'dce'];
// console.log(friends);

// Inside array we can store any kind of values..Also remember..array expects an expression always..:)
const myName = 'Tanshu';
const tanshuDetails = [myName, 'Allewar', 2023 - 1998, friends, games];
console.log(tanshuDetails);

// Exvercise - 

const calcAge = birthYear => 2047 - birthYear;

const years = [1990, 1991, 1994, 1998];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

const ages = [ calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Array Methods:

//  Push - Adds an element at the end of array

const cities = ['Mumbai', 'Pune', 'Jaipur', 'Delhi'];

const newLength = cities.push('Kolkata'); // Push here is a function..which basically adds an element to the end an array..
// Now remeber..every function returns something..so in this case..herer it returns the lenght of the array..
console.log(cities);
console.log(newLength);

// Unshift - Add elements at the begining of the array..
// This method also returns the length of the array..
cities.unshift('Lucknow');
console.log(cities);

// Remove Elements
// Pop: Removes last element of the array and returns the removed element

const removededElement = cities.pop(); 
console.log(cities);
console.log(removededElement);

// shift: Removes element from the begning of the array

cities.shift();
console.log(cities);

// Index of :  this method gives the index value of the particular element

console.log(cities.indexOf('Mumbai'));
console.log(cities.indexOf('Nagpur')); // will return -1 if an elemnt is not prensent in the array

// includes: Returns true or false if an element is present in the array or not..(ES6 new technique and more useful then indexof)

console.log(cities.includes('Mumbai'));
console.log(cities.includes('Nagpur')); // will return false if an elemnt is not prensent in the array