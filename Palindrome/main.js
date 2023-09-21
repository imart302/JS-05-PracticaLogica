/**
 * Write a program that prompts for a word or sentence 
 * (it can be capitalized, have spaces and punctuation). 
 * Figure out if the sentence/word is a palindrome or not. 
 * Ignoring punctuation, spaces and capitalized letters.
 */

const isAlpha = (s = "") => s.toLowerCase() != s.toUpperCase();

const sentence = prompt('Enter de word');

const cleanSentenceArray = sentence.toLowerCase().split('').filter(l => isAlpha(l));

let isPalindrome = true;
for(let i = 0; i < cleanSentenceArray.length / 2; i++){
  if(cleanSentenceArray[i] !== cleanSentenceArray[cleanSentenceArray.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}

console.log(`'${sentence}' is palidrome? ${isPalindrome}`);

