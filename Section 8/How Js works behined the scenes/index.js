'use strict';

// An High Level Overview of JS

// Defn : JS is a high level prototype based object oriented multi- paradigm interpreted or just in time compiled dyanamic single threaded garbage collected programming language with first class functions and non blocking even loop concurrency model

// Now we gonna break down this huge defn of Js into smaller topics and dicuss them in detail..

// High level: Now starting with the high level part, you might know every pgm that runs on your computer needs some hardware resources such as memory and cpu to do its work. Now there are low level languages such as C where you have to manually manage these resources.
// For example..asking the computer for memory to create a new variable. On the other hand..you have high level lang such as Js and Python where we do not have to mange the reources at all. Because these languages have so called abstractions that take  work away from us.
// This makes the lang easier to learn and use but the downside is pgm will never be as fast and optimised as for eg, C pgms

//Garbage Collection : Now one of the imp tools which takes memory managment away from us developers is garbage collection. This is basically an algorithm inside the Js engine which atomatically removes old unused objects from the computer memory. So it's a little bit like JavaScript has a cleaning guy who cleans our memory from time to time so that we don't have to do it manually in our code.

// Interpreted or just in time compiled : Now, JavaScript is an interpreted or just-in-time compiled language.
// This that the computer's processor only understands zeros and ones, that's right.Ultimately, every single program needs to be written in zeros and ones, which is also called machine code. And since that's not really practical to write, We simply write human-readable JavaScript code, which is an abstraction over machine code, but this code eventually needs to be translated to machine code.
// And that step can be either compiling or interpreting. This step is necessary in every single programming language because no one writes machine code manually. In the case of JavaScript, this happens inside the JavaScript engine.

// Multi- Paradigm : Now, one of the things that makes JavaScript so popular is the fact that it's a multi-paradigm language. In programming, a paradigm is an approach and an overall mindset of structuring our code, which will ultimately direct the coding style and technique in a project that uses a certain paradigm.

// Now the 3 popular Pardigms are procedural, object-oriented,and functional programming.
// So procedural programming is what we've been doing so far, which is basically just organizing the code in a very linear way, and then with some functions in between.

//Now, many languages are only procedural or only object-oriented or only functional, but JavaScript does all of it. So it's really flexible and versatile. And so we can do really whatever we want with it. It's our choice. We can use whatever paradigm we want.

// Prototyp based Object Oriented: So..Js is actually Prototype based Object Oriented.
// In simpler terms..almost everything in Js is an object except for primitive values such as numbers, strings, etc.

// But arrays, for example, are just object. Now, have you ever wondered why we can create an array and then use the push method on it..Well, it's because of prototypal inheritance.Basically, we create arrays from an array blueprint, which is like a template and this is called the prototype. This prototype contains all the array methods and the arrays that we create in our code then inherit the methods from the blueprint so that we can use them on the arrays..More about this in OOP section..😉

// First Class Functions:  First-class functions, which simply means that functions are treated just as regular variables. So, we can pass functions into other functions and we can even return functions from functions. And this is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional-programming..

// And actually not all languages have first-class functions, but JavaScript has, and so it is amazing.

// Dynamic Lannguage : JavaScript is a dynamic language and dynamic actually means dynamically-typed. So as we've already seen, in JavaScript, we don't assign data types to variables. Instead, they only became known when the JavaScript engine executes our code.
/*
Also, the type of variables can easily be changed as we reassign variables. And this is basically what dynamically-typed means. Now there is a lot of controversy if this is good or bad, but this is just how it works. Now, the same is not true for most other programming languages, where we have to manually assign types, to variables. And this then usually prevents bugs from happening, which is the reason why many people say that JavaScript should be a strongly-typed language as well.

// But anyway, let's now finally talk about the single-thread and the non-blocking event loop concurrency model. Now this is a really complex topic but we will discuss just a little bit briefly..

// First, what actually is a concurrency model? Well, it's just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time. No, okay. That's cool.

But why do we need that? Well, because JavaScript itself runs in one single-thread, which means that it can only do one thing at a time and therefore we need a way of handling multiple things happening at the same time. And by the way, in computing, a thread is like a set of instructions that is executed in the computer's CPU. So basically, the thread is where our code is actually executed in a machine's processor. But what if there is a long-running task, like fetching data from a remote server? Well, it sounds like that would block the single thread

where the code is running, right?

But of course we don't want that.

What we want is so-called non-blocking behavior

and how do we achieve that?

Well, by using a so-called event loop.

The event loop takes long-running tasks,

executes them in the background

and then puts them back in the main thread

once they are finished.

And this is, in a nutshell,

JavaScript's non-blocking event loop concurrency model

with a single thread.
*/

// Javascript Engine:

// Js engine basically a computer pgm that executes Js Code. There are a lot of steps involved in doing that, but essentially executing JavaScript code.
// Now every browser has its own Js engine. But the most famous one is Google's V Eigth Engine. The V8 engine powers Google Chrome and also Node Js.
// Now to understand this engine we need to understand its components.

// COmponenets:

// Any Js engine contains a call stack and a heap
// Call stack is where our actual code is executed using something called execution contexts
// Heap: This is an unstructred memory pool which stores all the object that our application needs

// Now with these two topics we have understood where our code is executed..
// And now is the time to understand how our code is compiled to machine code so that it can be executed later..

// Now we know that..the Computer Processor only understands 0's and 1's...So..every computer pgm needs to be converted into this m/c code..and this can happen using compilation and interpretation
// 1. Compilation: Entire code is converted into m/c code at once, and written to a binary file that can be executed by a computer

// Source Code ==> Portable M/C code ==> Program

// 2. Interpretation: Interprter runs through the code line by line.
// Here we do not have the same steps before. Instead the code is read and executed all at the same time. Now ofcourse the source code still needs to be converted into m/c code but it simply happens right before its executed and not ahead of time.

// Now JS used to be a purely interpreted language..but the problem with these lang is that they are much slower as compared to Compiled languages. This was fine with JS.
// but now with Modern Js and full fledged web applicatons low performance is no longer acceptable.
// So instead of simple interpretation modern Js Engine now use a mix between Compilation and Interpretation which is called ==> Just-in-time Compilation
// this approach basically compiles the entire code into m/c code at once and then executes it right away.
// So we still have the 2 steps of regular ahead of time compilation but there is no portable file to execute . And the execution happens immediatly after compilation.
// And this is perfect for Js and its lot faster then just executing code line by line

// HOW THIS WORKS:

// So as a piece of Js code enters the engine, the 1st step is to parse the code,which mean to read the code. Now during the parsing process..the code is parsed into a data structure called the Abstract Syntax Tree(AST). This works by splitting up each line of code into pieces that are meaningful to the language like the const or function keywords..and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors and the resulting tree will later be used to generate the m/c code.
// Also remember this tree has nothing to do with the DOM tree. So this AST is just representation of our entire code inside the v8 engine

// The next step is compilation which takes the generated AST and compiles into m/c code..
// This m/c code then gets executed right away..
// This is bcoz modern Js engine use just-in-time-compilation..and remeber execution happens in the Js engines call stack
// Next modern Js engines have some Code Optimization stratergies. What they do is to create a very un-optimized version of m/c code in the begining..just so that it can start executing as fast as possible.
// Then in the background, this code is being optimized and recompiled during the already running pgm execution. And this can be done multiple times.
// And after each optimization..the un-optimized code is simply swept for the new optimized code without ever stopping its execution.
// This process is what makes modern Js engines such as v8 so fast..
// And all this parsing..compilation, and optimizaiton happens in some special threads inside the engine that we cannot access from our code
// So completly seperated from the main thread that is basically running into call stack
// Now different engines  implement this in slightly different ways..but in a nutshell this is what a modern Just-in-time compilation in Js looks like

// Execution Context:
// Let's start by supposing our code has just finished compiling. So the code is now ready to be executed 🎉
// So now a so called Global Execution Context is created for the top level code
// Top level code is the code that is not inside the function.. SO here..the code which is outside the function will only get executed
// Next the code inside the function will get executed only when the functions are called

// Execution Context is baiscally an envirnonment in which js code is being executed. So it baiscally stores all the neccessary information which is needed for the execution of the code
// So remeber..Js code always runs inside the Execution Context
// Now in any js project, no matter how large it is there is only one global execution context. Its always there as a default execution context and this is wher the code will get executed
// Next step..the top level code gets executed..
// After this the functions get executed as an when they are called..
// Also..for every function call..new execution context is created..
// Same way, methods also get executed.
// Now all these execution contexts make up the call stack
// Now when all the fuctions are executed..the engine will basically keep waiting for callback functions to arrive..so that it can exeucte them
// Eg: A callback function execueted with a clickevent..And also note: its the event loop who provides these new call back functions
