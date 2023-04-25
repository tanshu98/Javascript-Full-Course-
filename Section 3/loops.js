// // // for loop keeps running while the condition is true

// // // for(let rep = 1; rep <= 10; rep++) {
// // //     console.log(`Lifting weights repetion ${rep}!`);
// // // }


// // const tanshuArray = [
// //     'tanshu', // 0
// //     2037 - 1998, // 3
// //     1998,
// //     'allewar', // 1
// //     'web developer', // 2
// //     ['Akshay', 'Tanshu', 'Tanay'], // 4
// //     // 5
// // ];

// // console.log(tanshuArray.length);
// // // console.log(tanshuArray[5]); // undefined

// // const types = [];
// // // typeOfArray[0] = 'string';
// // // typeOfArray[1] = Boolean;
// // for(let i = 0; i<tanshuArray.length; i++) {
// //     // Reading from Tanshu Array
// //     console.log(tanshuArray[i], typeof tanshuArray[i]);

// //     // Filling types
// //     // types[i] = typeof tanshuArray[i];
// //     types.push(typeof tanshuArray[i]); // this looks lot cleaner :)
// // }

// // console.log('types', types);
// // // Remeber..Array is an object
// // // Now next we are building a new array for displaying the type of array..

// // // So in normal syntax..we can do it like..(See line 20, 21, 22);

// // // Now we can do same thing using the for loop too..

// // // See line 28

// // // We can also use another method to do the same..i.e the Push method

// // // Simple exercise:

// // const years = [1991, 1998, 2001, 2007];
// // const ages = []; // empty array

// // // Calculation for ages and adding the calculated value in the ages array..

// // for (i = 0; i < years.length; i++) {
// //     ages.push(2037 - years[i]);
// // }
// // console.log('ages', ages);

// // // break: The break statement "jumps out" of a loop.
// // // continue: The continue statement "jumps over" one iteration in the loop. So basically it will skip the current iteration of the loop.
// // console.log('ONLY STRINGS --------');
// //  for(let i = 0; i<tanshuArray.length; i++) {
// //     if (typeof tanshuArray[i] !== 'string') continue;
// //     console.log(tanshuArray[i], typeof tanshuArray[i]);
// // }

// // console.log('ONLY NUMBER --------');
// //  for(let i = 0; i<tanshuArray.length; i++) {
// //     if (typeof tanshuArray[i] !== 'string') break;
// //     console.log(tanshuArray[i], typeof tanshuArray[i]);
// // }

// // // In the continue..when we get a string value it will continue..
// // // So here in the break..when the we dont get a string value..it will jump out of the loop

// // // looping backwards in an array

// const tanshu = [
//     'tanshu', // 0
//     2037 - 1998, // 3
//     1998,
//     'allewar', // 1
//     'web developer', // 2
//     ['Akshay', 'Tanshu', 'Tanay'], // 4
//     // 5
// ];

// // // 0,1,...5 standard loop
// // // 5,4,..0 backward loop

// for (let i = 0; i < tanshu.length; i++) {
//     console.log(tanshu[i]);
// } // initialise; condition; increment

// for (let j = tanshu.length - 1; j >= 0; j--) {
//     console.log(tanshu[j]);
// }

// // Now Loops inside loop..

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Number of repetitions ${rep}`);
//     }
// }


// // While Loop: 

// let rep = 1; //counter
// while(rep <= 5) { // condn
//     console.log(`Number of repetitions ${rep}`);
//     rep++;
// }

// // Now remeber..while loop just needs a condition.. which need to stay true for it to keep running..And that conditon can be anything and sometimes..it doesnt have to be related to a counter varialbe..

// Example: We will be rolling a dice till we get number 6..Now in this case..we do not know..till when the no 6 will come..i.e we dont know how many times the loop will run..so here we dont need a counter..(Perfect example for while loop)

let dice = Math.trunc(Math.random() * 6) + 1; // Here we are using random function to generate random nos..
// Math.random gnerates a decimal no..so we use Math.trunc() => to basically convert it into a integer number..and since we have taken the example of dice here..we dont need 0..so we are doing +1 ..
console.log(dice);

while (dice !==6) {
    console.log(`You rolled a ${dice}`); // Here at this point..the loop will keep on runing till we get 6
    dice = Math.trunc(Math.random() * 6) + 1; // this conditon will change the dice number value..
}

// Note: A while loop can be dangerous. As long as its condition is true, it will keep running. The only endpoint a while loop has is whatever we put inside of it.
// As such, if we don't do any kind of modification of the condition inside that loop, it will run forever. Thus, we have an infinite loop.