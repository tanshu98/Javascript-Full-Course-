// const obj = {
//     firstName: 'Tanshu',
//     lastName: 'Allewar',
//     age: 23,
//     job: 'Web Developer',
//     intrests: ['Movies', 'Computer Games', 'Coding']
// }

// The main difference between an array and object is ..the order of elements does not matter in objects
// but in arrays orders of the elements matter a lot..

// Therefore ..we should use arrays for ordered data..whereas use objects for unordered data

// console.log(obj.firstName); // dot notation
// console.log(obj['age']);  // bracket notation
// // Now in the bracket notation..since js expects an expression..so we can also access the object by writing expressions as well..
// const namekey = 'Name';
// console.log(obj['first' + namekey]); // Here we have used an expression..

// So when we have to compute the property name..then we use bracket notation..otherwise use dot notation

// when we try to access a property which doesnt exists..it gives us undefined error

// challenge - 

// Jonas has 3 friends, and his bestfriend is called Micheal

// const object2 = {
//     firstName: 'Jonas',
//     friends: ['Michael', 'Bob', 'Andy'],
//     age: 43,
//     location: 'Portugal'
// }

// console.log(`${object2.firstName} has ${object2.friends.length} friends, and his bestfriend is called ${object2.friends[0]}`);

// Object Methods:

const obj = {
    firstName: 'Tanshu',
    lastName: 'Allewar',
    birthYear: 1998,
    job: 'Web Developer',
    intrests: ['Movies', 'Computer Games', 'Coding'],
    hasPanCard: true,
    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // },
    // calcAge: function() {
    //     return 2023 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age ;
    },
    getSummary: function() {
        return `${obj.firstName} is a ${this.age} old ${this.job}, and he has a ${this.hasPanCard ? 'Pan Card' : 'Does not have a Pan Card'}`;
    }
};

// Any function that is attached to an object is called a method..so here the funciton is just a property..

console.log(obj.calcAge());
// console.log(obj['calcAge'](1998));

// In every method js gives access to special variable called this

// now here see..we have calcAge function..which is supposed to take birthYear as a paramter..right! But..remember..we already have property called birthYear..so we can use that as well..
// For this we use the this keyword..


// THIS KEYWORD: 

// In JavaScript, the this keyword refers to an object.

// This keyword or variable is basiccally equal to the object on which the method is called i.e it is equal to the object calling the method

// calc age once..store it in a object for later use..then later when neeeded ,,we can retruve the age as a prooperty from the object
// we have done it in lines 53 - 56

console.log(obj.age);
console.log(obj.age);
console.log(obj.age);
console.log(obj.age);
console.log(obj.getSummary());
// challenge:

// So in conclusion: Arrays are also objects..hence they also have methods as well