var arr = ["hello", "madam", "gowtham", "skd"];

// Anonymous function
var palindrome = arr.filter(function (word) {
  var reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
});

if (palindrome.length > 0) {
  console.log('The below code is for anonymous:');
  console.log(palindrome.join(', '));
} else {
  console.log('NO PALINDROME');
}

// IIFE
(function () {
  var immediatePalindrome = arr.filter(function (words) {
    var reversedWords = words.split('').reverse().join('');
    return reversedWords === words;
  });

  if (immediatePalindrome.length > 0) {
    console.log('The below code is for IIFE:');
    console.log(immediatePalindrome.join(', '));
  } else {
    console.log('NO PALINDROME');
  }
})();

// o/p
// The below code is for anonymous:
// madam
// The below code is for IIFE:
// madam