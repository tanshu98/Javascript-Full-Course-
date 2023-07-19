// Before ES6..in Js we only had 2 data structures..i.e Arrays and Objects
// ES6 introduced two more data structures..i.e Sets and Maps

// Sets -
// Set is basically a collection of unique values..i.e a set can never have any duplicate values

const orderSets = new Set([
  'Tanshu',
  'Allewar',
  'Tanshu',
  'Allewar',
  'Sakshi',
  'Shrunkhala',
  'Tanshu',
]);
console.log(orderSets); //Set(4) { 'Tanshu', 'Allewar', 'Sakshi', 'Shrunkhala' }
// Having unique values..
// Also set doesnt not have key value pairs..they are only values grouped together in the form of sets..
// Also sets are iterables..

// Sets are very different then arrays..even though at first glance we might feel that they are similar to each other..

// In Sets - 1st Elements are unique, secondly the order of the elements is irrelevent
// Also remember, strings are also iteralbles

console.log(new Set('Tanshu')); // Set(6) { 'T', 'a', 'n', 's', 'h', 'u' }

// Operations in Sets -

// 1. Size of a Set -
console.log(orderSets.size); // 4

// 2. We can check if a particular element is in set or not..(NOte this method is similar to the includes in Arrays!) -

console.log(orderSets.has('bread')); // false
console.log(orderSets.has('Tanshu')); // true

// So this has here is a method!

// 3. Add elements into sets -

orderSets.add('Taylor');
orderSets.add('Taylor');
orderSets.add('Taylor');
console.log(orderSets);

// 4. Delete Elements from Sets -

orderSets.delete('Allewar');
console.log(orderSets);

// Intrestingly, there's no way of retriving individual values from a set..because it doesnt have an idexes..
// Also there's no point in retriving the values has all the values inside the sets will always be unique and so if you have to check a single value also,,in that case u can use 'has' method..
// And if you want a specific use case then,, you can def go for either arrays or objects!

// 5/ Delete all the elements from the set -
// orderSets.clear(); // Set(0) {}
// console.log(orderSets);

// Since Sets are iterables..We can also loop them..

// for (const order of orderSets) console.log(order); // Simple for of loop :)

// Practical Use case of Sets - So..generally we use Sets to remove duplicate values from arrays

const staff = [
  'waiter',
  'cook',
  'waiter',
  'restaurant owner',
  'cook',
  'waiter',
];

// Now here we need a unique array..
// So for that, first we can convert this array into a set!

// const staffSet = new Set(staff);
// console.log(staffSet); // Set(3) { 'waiter', 'cook', 'restaurant owner' }

// now the conversion from set to array is easy becoz they both are iterables
// So..we can convert this set in line 78 into array using the spread operator!

const staffSet = [...new Set(staff)];
console.log(staffSet); // [ 'waiter', 'cook', 'restaurant owner' ]
// Hence, here we get the array!

// We can also directly calculate the size of the array..by storing it in the form of set..(Even though we can direclty do this with array.length)..but again this is just an eg..for better understanding!

console.log(
  new Set(['waiter', 'cook', 'waiter', 'restaurant owner', 'cook', 'waiter'])
    .size
); // 3

// We can also calculate the sizeof a string too..

console.log(new Set('tanshuallewar').size); // 10
