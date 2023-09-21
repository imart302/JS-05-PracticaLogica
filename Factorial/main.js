function askForNumber(error) {

  const number = prompt(`${error ? '| Previous wasn\'t a number |': '' }Enter number`);
  return Number.parseInt(number);
}

let error = false;
let actual;
do {
  actual = askForNumber(error);

  if(!Number.isNaN(actual)){
    error = false;
  } else {
    error = true;
  }

} while(error);


function factorial(n){
  if(n === 1) {
    return 1;
  } else {
    return factorial(n-1)*n;
  }
}

const fac = factorial(actual);

console.log(`El factorial de ${actual} es ${fac}`);