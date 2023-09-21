/**
Write a program that asks for 10 numbers. Using logical operators and any 
other javascript functions/structures you've seen before, 
determine and output the highest of those numbers.
 */


function askForNumber(index, error) {

  const number = prompt(`${index} ${error ? '|Previous wasn\'t a number': '' }: Enter number`);
  return Number.parseInt(number);
}

const MAX_NUMBERS = 10;
let numbers = [];
let actual;
let error = false;

do {
  actual = askForNumber(numbers.length + 1, error);

  if(!Number.isNaN(actual)){
    numbers.push(actual);
    error = false;
  } else {
    error = true;
  }

} while(numbers.length < MAX_NUMBERS);


const max = Math.max(...numbers);
console.log(`Max number is ${max}`);

