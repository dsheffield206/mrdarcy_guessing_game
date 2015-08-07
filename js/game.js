'use strict';

var guess, answer, message;

//Generate random number 1 to 100 representing Mr. Darcy's number
answer = Math.floor(Math.random( ) * 100 + 1);
console.log(answer);

guess = prompt("I'm thinking of a number between 1 and 100... what is it?");

if(guess == answer) {
  message = "Are you a wizard? You got it right!"
} else {
  message = "Oh well. You only had a 1% chnce anyway. Don't  cry."
}

var darcySays = document.getElementById('darcy-says');
darcySays.innerHTML = message + '<img src="img.darcy-sam.jpg">';

// alert(message);
