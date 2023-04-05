// const day = 'monday';

// switch(day) { // if(day === 'monday')
//     case 'monday':
//         console.log('Plan course Structure');
//         console.log('Go to coding meetup');
//     break;
//     case 'tuesday':
//         console.log('Prepare thoery videos');
//     break;
//     case 'wednesday':
//     case 'thrusday':
//         console.log('Write code vidios');
//     break;
//     case 'friday':
//         console.log('Record Videos');
//     break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//     break;

//     default:
//         console.log('Pls enter a valid day!');
// }

// // Expressions and statmenets - 

// //  Expression - Its a peice of code that produces a value

// Eg : 

44 + 3 

// Statement -  Its just a peice of code which doesnt produce any value

// Ternary Operator - 

const age = 24;

// age >= 18 ? console.log('You can drink Wine!') : console.log('You cannot drink Wine');
// ? - this is kind of a if statemnt and then after that we have a mandatory else block..denoted by :

// Note : Since an operator always produces a value..hence its called as an expression..
// Now the best case scenario for ternary operator is to declare variable after a particular condition is true..
// Eg:

const drink = age > 18 ? 'Wine' : 'Water';
console.log(drink);

// now we can also use ternary operator in template literals..

// Eg :

console.log(`I like to drink ${age > 18 ? 'Wine😍' : 'Water'}`);