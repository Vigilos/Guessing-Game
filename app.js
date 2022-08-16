'use strict'; // strict syntax

console.log('app is running');

let user = prompt('What is you name?');
console.log(user);
if (user === null) {
  alert('You need to provide your name...');
  user = prompt('Please provide your name to continue...');
}
alert('Hello ' + user + '! Thank you for visiting my website. ');

let myAge = 33;
let userGuess = prompt('Am I 33 years old?');
if (userGuess.toLowerCase() === 'yes'){
    // console.log('Great guess! I am 33 years old.');
    alert('Great guess! I am 33 years old.');
} else if (userGuess.toLowerCase() === 'no'){
    // console.log('Unfortunately that is wrong. I am 33 years old.');
    alert('Unfortunately that is wrong. I am 33 years old.');
} else {
    // console.log('Why didn\'t you guess Yes or No!');
    alert('Why didn\'t you guess Yes or No!');
}

let myFavoriteShow = 'The Wire';
let userAttempt = prompt('Is my favorite TV Show The Sopranos?');
if (userAttempt.toLowerCase() === 'yes') {
    // console.log('Close! My Favorite TV Show is The Wire!');
    alert('Close! My Favorite TV Show is The Wire!');
 } else if (userAttempt.toLowerCase() === 'no') {
    // console.log('Correct! My favorite TV Show is The Wire!');
    alert('Correct! My favorite TV Show is The Wire!');
 }

let myFacialHair = 'True';
let userFacialHairGuess = prompt('Do I have a beard?');
if (userFacialHairGuess.toLowerCase() === 'yes') {
    // console.log('Correct! I do have a beard currently.');
    alert('Correct! I do have a beard currently.');
 } else if (userFacialHairGuess.toLowerCase() === 'no') {
    // console.log('Wrong! I currently have a beard.');
    alert('Wrong! I currently have a beard.');
 }

let myFavoriteTeam = 'Arsenal';
let userTeamGuess = prompt('Is Arsenal FC my favorite sports team?');
 if (userTeamGuess.toLowerCase() === 'yes') {
    // console.log('Correct! Seahawks, Mariners, and Sounders are some of my other favorite teams.');
     alert('Correct! Seahawks, Mariners, and Sounders are some of my other favorite teams.');
  } else if (userTeamGuess.toLowerCase() === 'no') {
    // console.log('Wrong! Arsenal FC are my Favorite team. COYG!');
     alert('Wrong! Arsenal FC are my Favorite team. COYG!');
  }

let myFavoriteCity = 'Barcelona';
let userCityGuess = prompt('Is Paris my favorite city to travel to?');
 if (userCityGuess.toLowerCase() === 'yes') {
    // console.log('That\'s wrong! Barcelona is my favorite city to travel to, ' + user + '.');
     alert('That\'s wrong! Barcelona is my favorite city to travel to, ' + user + '.');
  } else if (userCityGuess.toLowerCase() === 'no') {
    // console.log('That\'s correct! Barcelona is actually my favorite city to travel to, ' + user + '.' );
     alert('That\'s correct! Barcelona is actually my favorite city to travel to, ' + user + '.' );
  }

// let color = prompt('What is your favorite color?');

// switch (color) {
// case 'red':
//   alert('I like red');
//   break;
// case 'blue':
//   alert('blue is great too');
//   break;
// case 'yellow':
//   alert('yellow is just okay');
//   break;
// default:
//   alert('Oh interesting, I don\'t know that color');
// }

// // creates a variables and asks the user to give it a value.
// let movie = prompt('What is one of my favorite action movies?'); // String data type
// if (typeof(movie) === 'string') {
//   movie = movie.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
// }

// if (movie === 'con air') {
//   alert('That is a great Movie!');
// } else if (movie === 'the rock') {
//   alert('Another great Movie');
// } else if (movie === 'face off') {
//   alert('One of my faves!');
// } else {
//   alert('I don\'t know that movie!');
// }