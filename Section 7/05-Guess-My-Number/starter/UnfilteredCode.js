'use strict';

// console.log(document.querySelector('.message').textContent); //Selected the class message using querySelector Property..and then to get its content..we used textContent

// DOM - Structered representation of Html documents. Alows Js to access html elments and styles to manipulate them
// Now the dom is atomatically creaated by the browser as soon as the Html page loads ANd in this tree each html element is one object

// Note: DOM IS NOT A PART OF JS..
// Its part of something called as web API's
// Web API's are librarires that browsers implement and that we can access from our js code

// // change the selected class elemnt value
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;

// // For input feild,
// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

// Event Listeners -

// Event = An event is something that happens on the page..
// Eg: Mouse click, keyPress etc.
// Then with an event listner, we can wait for a certain event to happen and then react to it.

// Random No Logic - Math.random() = Displays no from 0 to 1 in a decimal format randomly
// Now to get a no from 0 to 19..we multiply by..20..so..last digit will be arond 20..and again its in decimal form..so it will be 19.99999
// now to convert it into interger..we use Math.trunc() method
// Now we are getting no from 0 to 19..
// Now to get no from 1 to 20..we add +1..

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable
let highScore = 0;

// Function for displaying the message -

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Logic for high score

// score > highScore = > highScore = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // This is input filed..so here..the values are of string type

  // Game Logic -
  // 1) Check if there's no input -
  // If guess has no value..then..guess = false
  // SO..!guess = > !false = > true
  if (!guess) {
    // true
    displayMessage('⛔️ No number!');
    // document.querySelector('.message').textContent = '⛔️ No number!'; // if(true) => Go inside
  } else if (guess === secretNumber) {
    // Change the bakcground color when user guesses the correct number
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber; // We are giving the class number..our secret number

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Note: We are not changing the Main css file..we are just changing the inline css!

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      // '😳 You have lost the game!';
      displayMessage('😳 You have lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😳 You have lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😳 You have lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // 2nd Scenario - When the user guesses the correct no
  // 3rd Scenario - When the user doesnt guess the correct no
  // i) When the user guess is too high
  // ii) When the user guess is too low
});

document.querySelector('.again').addEventListener('click', function () {
  // restore values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...'; // message
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Notes -

// Event Listener expects us to pass in two arguments 'click'
// This 'click' is a funciton and here in that function we pass in another funciton..wihch becomes the 2nd argument.

// Explaination = Initally we are selecting the check button using querySelector and then we add an event listner method on that element to attach an event handler.
// That event handler is that funciton
// So as the 1st argument we had the name of the event that we are listening for..and that as a 2nd argument we have this function value.
// And this fucntion here simpley contains that code that we want to execute whenever the event happens
// Note: This funciton will not be called once the script is executed.
// It will only be called as soon as the event happens
// This function calling is handled by the js engine

// refactoring the code - Cleaning up the code. For this we will be removing duplicate code like in the calc of else if block where we calc low no and high no
// From line 66 to 86..its a repeated code..

// So we just condensed it into a single else if block..line 68 to 78..
// Another imp technique for refactoring the code is to use function when  the code is repeated..

// Eg: document.querySelector('.message').textContent = 'Start guessing...'; // message
// This message has been repeated a lot of times in our code..So we can simply create a fuction for this one
