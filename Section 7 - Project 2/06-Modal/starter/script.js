'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Whenever we use query selector..with a selector which actually matches mutliple elmenents only the 1st one will get selected..

// So to fix that issue we use querySelectorAll() -  which selects mutiple dom elements

// Now the output we get is..in the form of Array..(Node list in console)..so we can loop through them to display the contents of each element

// for (let i = 0; i < btnOpenModal.length; i++)
//   console.log(btnOpenModal[i].textContent);

// Since there is only one line of code we dont need a {} in the for- loop;

// Now we will attach an event handler/listner to this for loop..

// Function for Opening the modal window
const openModalWindow = function () {
  console.log('Button Clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Function for Closing Modal Window
const closeModalWindow = function () {
  console.log('Crossed button clicked!');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModalWindow);

// Remeber..this function will get executed only when..the user clicks on the button..

// For closing the modal window

btnCloseModal.addEventListener('click', closeModalWindow);

// Closing modal window on clicking outside modal window

overlay.addEventListener('click', closeModalWindow);

// Since the code for closing the modal is same..we can create a function and then call it in our eventListener..
// Remeber again..we are not using closeModalWindow(), becoz then this would immedialty call the function when the code gets executed..
// but since we want our code to get execute only on click envent...we write without the paranthesis..so..now the js runtime engine will call the function as an when the user clicks on the btn.

// Keyboard Events - These events also require eventListener..
// keyboard events are so called global-events because they do not happen on one specific element. And for global events like keyboard events we usually listen the whole document
// Keyboard events - keyup, keypress and keydown

document.addEventListener('keydown', function (e) {
  // console.log(e); -> An object of Keyboard events is logged
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// This closeModalWindow is a function here because on after the conditon in line 59,,we want to close the window..so basically we want to execute the function..hence we call the function in hthis  case..

// Now in case of keyboard events..we do not know exactly which key is being pressed..it can be any key..and the event handler will run..
// But since we need this funcitonality to only occur when we are pressing ESc key..we will pass and paramter inside the eventHandler function..say 'e'..
// e => Here stands for event..So..as the event occurs..Js will call this function with event object as an argument
// Js will call the function when this keydown event happens and then it will pass an event object as an argument..SO here the event object

// If a modal is oppen..it means it has no hidden class
