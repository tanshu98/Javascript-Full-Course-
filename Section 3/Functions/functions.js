'use strict';

// Function is just a peice of code that we can reuse over and overagain

// Executing function is called - calling/ invoking / running a function.

// function logger() {
//     console.log('Hello this is my First Function!');
// }

// logger();
// logger();
// logger();

function fruitJuice(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice is of ${apples} apples and ${oranges} oranges.`
    return juice;
}

// fruitJuice(5,0);
const appleJuice =  fruitJuice(5,0);
console.log(appleJuice);
// In order for us to get the return value..what we do is..store the return value in a variable
// But also not the u can print the return value using the console.log();..
// But remember..Its just better to store the return value and then use it..


// Function Declaration - All the previous eg were of function declaration where we use the function keyword to declare the function

// Function Declaration - 

const age1 = calAge1(1998);

console.log('age1', age1);


function calAge1(birthYear) {
    return 2047 - birthYear;
}


// Function Expression - Here we use a variable to declare a function..and rember..this function is nameless here..hence its called an anonymous funciton..

const calAge2 = function(birthYear) {
    return 2047 - birthYear;
}

const age2 = calAge2(1998);
console.log('age2', age2);

// So rember..funciton is a value hence we can sttore it in a variable

// Now the main difference between function declaration and function expression is..we can call function in funciton declaration..before even its declared..Egg line 33 and 35;

// But the same doesnt apply for function expression..it will give an error..if u try calling funciton expression before intialisation

// Arrow Functions - 

const calcAge3 = birthYear => 2047 - birthYear;

const age3 = calcAge3(1998);
console.log(age3);

// This arrow function is best for one paramter and when we just have one line of code to write inside a funciton..
// Remeber..Arrow function don't get this keyword..


