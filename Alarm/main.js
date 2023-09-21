let seconds;
let secondsNumber = Number.NaN;
let error = false;

do {
  seconds = prompt('Set your alarm second: ');
  secondsNumber = Number.parseInt(seconds);

} while ( Number.isNaN(secondsNumber));

setTimeout(() => {
  alert('Your alarm finished');
}, secondsNumber);