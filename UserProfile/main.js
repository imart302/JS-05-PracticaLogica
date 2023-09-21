
/**
Write a program that prompts a user for their data: username, age, and 
a list of their favorite movies. Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'"
*/

let username = prompt('Enter your username');
let age = prompt('Enter you age');

let ageNumber = Number.parseInt(age);
while(Number.isNaN(ageNumber)){
  console.log('Age must be a number');
  age = prompt('Age must be a number, enter you age');
  ageNumber = Number.parseInt(age);
}

let movies = prompt('Type your favorite movies separated by comma, eg: matrix, titanic');
let movieArray = movies.split(',').map(v => v.trim());


console.log(`Your name is ${username}`);
console.log(`Your age is ${age}`);
movieArray.forEach(film => console.log(`The film ${film} is one of my favorites`))
