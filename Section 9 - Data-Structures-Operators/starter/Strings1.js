const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B370'[0]); // We can do same by directly writing the string and then peforming indexing operation on it..

// we can use length method as well..
console.log(airline.length);
console.log('B370'.length);

// Methods in Strings -

console.log(airline.indexOf('r')); // Prints the position of 1st occurenece of the passed string..
console.log(airline.lastIndexOf('r')); // Prints the position of last occurence of passed string..
// Now..note..we can also pass an entire stirng..
console.log(airline.indexOf('Portugal'));

// Since the strings are indexed based..hence note...they are also zero based index
// Also these methods are case sensitive..
console.log(airline.indexOf('portugal')); // -1

// Now with the help of indexes..we can extract part of a string using slice method..and the slice method needs indexes as arguments

console.log(airline.slice(4)); // Air Portugal
// inside the slice..we pass starting and ending paramter..i.e the portion which we wanna extract..
// SO since we have added 4..it will start extracting the string from poisiton 4..
// And so we get Air Portugal
// Now the string which we have got..this  is also called as Substring

// Now remeber..this doesnt change the orignal string..becoz string are immposible to mutate..since they are primitve data types..

// We can also use the end paramter here..
console.log(airline.slice(4, 7)); // air
// Now remeber..all these methods always return a string
