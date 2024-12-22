let word1 = prompt("RACECAR:");
let word2 = prompt("RECORDER:");

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  return str === reverseString(str);
}

let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

console.log(Original word 1: ${word1});
console.log(Reversed word 1: ${reversedWord1});
console.log(Original word 2: ${word2});
console.log(Reversed word 2: ${reversedWord2});

console.log(Is "${word1}" a palindrome? ${isPalindrome(word1)});
console.log(Is "${word2}" a palindrome? ${isPalindrome(word2)});