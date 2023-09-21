/**
 * Write a program that takes the following nested matrix 
 * and flattens it (makes it a 1D array). 
 * Use any type of algorithm you want like callbacks, 
 * recursion, etc...
 */

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function flatArrayHardWay(array){

  let flatten = [];

  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      const r = flatArrayHardWay(array[i]);
      flatten.splice(flatten.length, 0, ...r);
    } else {
      flatten.push(array[i]);
    }
  }

  return flatten;
}


const flatten = flatArrayHardWay(multiDimension);

console.log(`Array flatted is: ${flatten}`);

