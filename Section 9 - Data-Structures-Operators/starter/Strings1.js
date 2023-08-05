// // STRINGS PART - 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B370'[0]); // We can do same by directly writing the string and then peforming indexing operation on it..

// // we can use length method as well..
// console.log(airline.length);
// console.log('B370'.length);

// // Methods in Strings -

// console.log(airline.indexOf('r')); // Prints the position of 1st occurenece of the passed string..
// console.log(airline.lastIndexOf('r')); // Prints the position of last occurence of passed string..
// // Now..note..we can also pass an entire stirng..
// console.log(airline.indexOf('Portugal'));

// // Since the strings are indexed based..hence note...they are also zero based index
// // Also these methods are case sensitive..
// console.log(airline.indexOf('portugal')); // -1

// // Now with the help of indexes..we can extract part of a string using slice method..and the slice method needs indexes as arguments

// console.log(airline.slice(4)); // Air Portugal
// // inside the slice..we pass starting and ending paramter..i.e the portion which we wanna extract..
// // SO since we have added 4..it will start extracting the string from poisiton 4..
// // And so we get Air Portugal
// // Now the string which we have got..this  is also called as Substring

// // Now remeber..this doesnt change the orignal string..becoz string are immposible to mutate..since they are primitve data types..

// // We can also use the end paramter here..
// console.log(airline.slice(4, 7)); // air
// // Now remeber..all these methods always return a string
// // And the length of the string is always..end - start i.e 7-4  = 3 (Length of the string)!

// // Extract string values without using any hardcoded values -

// // Get the first word - i,e TAP

// console.log(airline.slice(0, airline.indexOf(' ')));
// // Remember - The start is always with 0 index value and the end value..is the 1st occurence of space after P..so we use indexOf method..

// // Extract Portugal -

// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // Here..we are checking for last occurence of space which is just before 'P', and so we use lastIndexOf method here..to get that..occurence..and also note we dont specify the end parameter and so it just prints the remains string as it is..
// // Also..we add + 1 , because the starting parameter also includes space..so we wanna skip it..so +1 :)

// // Using Negative Paramters -

// console.log(airline.slice(-2)); // Prints last 2 letters of the string - al
// console.log(airline.slice(1, -1)); // AP Air Portuga
// // It starts from 1, which means it will skip the 1st word..and ends at -1..wihch means..it will also skip the last word!

// // Make a function to calculate if we get a middle seat or not in a airplane..
// // Logic - User will get a middle seat if the seat has 'B' or 'E' in their string..

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1); // Here..we are checking for the last letter...and then comparing it..
//   if (s === 'B' || s === 'E') {
//     console.log(`You have got the middle seat!`);
//   } else {
//     console.log(`You've got Lucky!`);
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // Now why are we able to use methods in strings..eventhough..strings are primitive..? Well..what happens is..behined the scenes..Js converts strings into objects..so that's why we can use methods on that particular obj..and then after the method is run..it returns string values (i.e objects are converted back to string)!

// // Eg:

// console.log(new String('Tanshu')); // string converted into object
// console.log(typeof new String('Tanshu')); // object

// // And then when method is run on this..string..
// console.log(typeof new String('Tanshu').slice(1)); // Object gets converted back to string

// // Strings Part 2 -

// // More Additional String Methods -

// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
// // We can also call these methods directly on strings too!

// // Fix Capatilization -

// const passenger = 'tAnShU';

// // So here we want the name to be..Tanshu

// // First step is to convert everything into Lower case
// const passengerLowerCase = passenger.toLowerCase(); // tanshu

// // Next step is to make t -> T
// const passengerCorrect =
//   passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
// console.log(passengerCorrect); // Tanshu

// // Comparing Emails -

// const email = 'tanshuallewar98@gmail.com';
// const invalidEmail = '  TaNSHuallEwaR98@GMAIl.com \n'; // So basically both these emails are actually same..(Spoiler ALert!)..We have additional spacing and a enter character at the end(denoted by \n!)

// // Step 1 - To convert this invalidEmail into lowerCase

// // const lowerCaseEmail = invalidEmail.toLowerCase();

// // Step 2 - To remove black spaces..For this we use trim method which actually removes blanck spaces in the string..

// // const validEmail = lowerCaseEmail.trim();

// // Now we can perform all these 2 steps in a single step also..

// const correctEmail = invalidEmail.toLowerCase().trim(); // So we can apply methods after the 1st method is completed..just like we did in Maps..
// console.log(correctEmail);

// // Replacing

// const priceGreatBritian = '2897,98@';
// // We wanna replace , and @ with . and $

// const priceUS = priceGreatBritian.replace('@', '$').replace(',', '.');
// console.log(priceUS); // We use chaining of replace methods in this case!

// // We can also replace an entire word too!

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate')); // So this actually replaces only one occurence of door..i/e the 1st occurence..
// console.log(announcement.replaceAll('door', 'gate')); // This replaces door with gate on both the occureneces!!

// // We can also use Regular expression too..

// console.log(announcement.replace(/door/g, 'gate')); // g stands for global
// // this also replaces all the door occurences with the gate!
// // Also note..all the string methods are case sensitive..

// // Boolean Methods -

// const planeNew = 'Air Bus A30e';
// console.log(planeNew.includes('A30'));
// console.log(planeNew.includes('Bfgsl'));

// console.log(planeNew.startsWith('Air'));

// // SO lets say..we wanna check if our newplane is a part of our Airbus family..

// if (planeNew.startsWith('Air') && planeNew.endsWith('neo')) {
//   console.log('Welcome to the Airbus Family!');
// }

// // Simple Excercise -

// // Write a function to determine if a person is allowed on the plane or not based on the bagage they carry!

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed OnBoard :(');
//   } else {
//     console.log('Welcome Aboard!');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// // Strings Part 3 -

// // Split - Split allows us to split string into multiple parts  into an array based on divider string

console.log('a+very+nice+string'.split('+')); // (4) ['a', 'very', 'nice', 'string']

console.log('Tanshu Allewar'.split(' ')); // Here the blank space is the divider string!
// (2) ['Tanshu', 'Allewar']

// This split method has lot of additional uses..We can use lot more additional features with this..
// Eg: We can use destructing in the split method..

const [first, last] = 'Tanshu Allewar'.split(' ');
console.log(first, last); // Tanshu Allewar

// Now the opp of split is "join" :

const newName = ['Mr.', first, last.toUpperCase()].join(' ');
console.log(newName); // Mr. Tanshu ALLEWAR
// Here..this join converts array elements into string..pure opp of split method.. PLs note..we use join method after array[] = basically write the join method..after the whole array is completed!

// Now we can use both join and split and perform quite amazing tasks quite easily..
// LEts take captalization eg here..

const captalization = function (name) {
  // COnverting string into arrays so that we can loop over the array..
  const names = name.split(' ');
  const namesUpper = [];

  // Looping over an array and applying captalizaiton logic
  for (const n of names) {
    // Now we can achive the same result of capatilization of strings using replace method too!
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    /// Now we are pushing this values into a new array..so that in the end we end up with an array with all the names capatalized and then we can join that array together
  }
  console.log(namesUpper); // (5) ['Lets', 'Learn', 'To', 'Captalize', 'Strings!']
  // In the next step, we convert this array into strings with space in between..so we use space as the string divider
  console.log(namesUpper.join(' ')); // Lets Learn To Captalize Strings!
};

captalization('lets learn to captalize strings!');
captalization('gambare gambare, you have got this!');
