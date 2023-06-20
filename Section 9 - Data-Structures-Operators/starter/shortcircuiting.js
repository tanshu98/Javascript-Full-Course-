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
// Logical Operators -

// console.log(1 || 'Tanshu'); // 1

// Here there r 2 values that are not boolean..right!

//SO here..in the casse of logical operators..they can use any datatypes, return any data type..and perform something called as short ciruiting! ( Short-circuit-evaluation)

// Short ciruiting in OR Opertor -
// - IN the case of OR operator, Shortciruiting means tht if the 1st value is a truthy value it will immedialty return that 1st value. And so if the 1st value is a truthy value..then the other operand will not even be evaluated..
// SO hence it return 1 which is a truthy value
// console.log('' || 'Tanshu'); // Falsy vaue, Turthy value - Tanshu
// console.log(true || 0); // Note: '', 0, undefined, null, 0 are all falsy values
// console.log(undefined || null); // here it will return null becoz the 1st value is a falsy value..2nd is also a falsy value but js will just return null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is returned

// // Practical ex of Shortcircuiting -

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant : 10;
// // console.log(guests1);

// // What we are trying is to set default values uisng the ternary opertor!
// // Now we can actually make it much simpilar using the shortcircuiting method!

// // Eg

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // Shortcicuiting in AND Operator -
// // AND Operator works in opp to OR operator
// // AND Operator short ciruits when the 1st value is falsy value and then it immedialty return the falsy vaue without evauationg the 2nd operand
// console.log('------AND-------');

// console.log(0 && 'Tanshu');
// // Here 0 is a falsy value..and So AND operator returns back 0;
// console.log(8 && 'Tanshu');
// // Here, 8 is a truthy value..hence the evaluation contiues and it retunrns the last value

// console.log('Hello' && 23 && null && 'Tanshu'); // null

// // Practical Example -

// // write a code to check if a particular given method exists or not

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'Spinach');
// } // Normal code

// // We can do the same by using short circuiting in And operator

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach'); // Here,if the 1st value is false, then the entire operation will become false..and hence the function will then get called..
// // If its true the function will definatley get called

// // Conclusion -

// // OR Operator - This will return the 1st truthy value of all the operands or simply the last value if all of them are falsy
// // AND Operator - This operator will return the 1st falsy value of all the operands or the last value if all of them are trurthy

// // Practical Applications - We can use OR opertor to set default values and we can use the AND Operator to execute the code in the 2nd operand if the 1st value is true!

// Nullish Coelising Operator -

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;

// console.log(guests);

// Now here..numGuests is 0 and so its a falsy value and so it returns 10.

// But, note the no of guests can also be 0..so here is a bug..

// Now this we can solve using someting called as Nullish coalesing Operator

const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0

// So this operator basically works on the concept of nullish values instead of falsy values
// Nullish values - Null, Undefined (Not 0 or '');
// So here..only nullish values will shortcircuit the evaluation

//The null coalescing operator (??) is a binary operator introduced in JavaScript that is used to return the first operand if it exists and is not null or undefined; otherwise, it returns the second operand.

// NOw when..no of guests is 0, then when we use the ?? operator..it will return 0.. This is because the 1st operand has some value and that value is not a nullish value - null or undiefined and so ,,we get the 1st operand as the result
// when no of guests = null, Here..we will it will continue its evaluation till the 2nd operand and hence will return the values of 2nd operand!

// Logical Assingment Operators - ES2021

const rest1 = {
  name: 'Mama Ka Dhabha',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Northen Blue Restaurent',
  owner: 'Tanshu Allewar',
};

// We wanna add a logic to set a default value for numGuests prop in both the objects..Since rest2 doenst have a numGuests prop..so we wann do something obout it!

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// So this above code works perfectly when no of guests are not a falsy value..If they are a falsy value..lets say  0 which again is a perfect no of guests..Then we will have to use nullish assignment orperator

// Nullish assignment orperator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// console.log(rest1, rest2);

// rest1.owner = rest1.owner && '<ANONYMUS>';
// rest2.owner = rest2.owner && '<ANONYMUS>';

// And Assignment Operator

rest1.owner &&= '<ANONYMUS>';
rest2.owner &&= '<ANONYMUS>';
// console.log(rest1, rest2);

// For of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // using spread operator
// console.log(menu);

// for (const item of menu) console.log(item);
// In this loop..we dont have to put counters and variables..we can just directly loop through a set of data and then print them individually without worrying about this conditons..
// Also we can use break and continue statements with this for-of loop;

// So here we are currently printing the current element..
// Now lets say we wanna print index values also along with current element..

for (const item of menu.entries()) {
  // console.log(item); // [ 0, 'Focaccia' ] , [ 1, 'Bruschetta' ] etc.
  console.log(`${item[0] + 1}: ${item[1]}`);
  console.log({ item });
  console.log(item);
}

// console.log([...menu.entries()]);

// SO baiscally menu.entries itself is an array and inside this array we have both item and indexes in seperate individual arrays..
// i.e 1st index value will be the 1st array with the 1st value and so on..
// And so using item of menu.entries() we are looping the item through all these individual arrays

// SO in line 189, we have item which is looping through menu.entries(). So here.. in the item[0] we have the index number..ok.and then in the item[1] we have its value..

// For better understanding print the output of line 192 in live server!

// Now we can further enhance our code much better using the destructring operation..So basically we can perform destructoring in line 187 and 189

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
