let seconds;
let secondsNumber = Number.NaN;
let error = false;
let secondCounter = 0;

do {
  seconds = prompt('Set your alarm second: ');
  secondsNumber = Number.parseInt(seconds);

} while ( Number.isNaN(secondsNumber));


const id = setInterval(() => {
  console.log(`Seconds passed: ${++secondCounter}`)
}, 1000);

setTimeout(() => {
  clearInterval(id);
  alert('Your alarm finished');
}, secondsNumber);