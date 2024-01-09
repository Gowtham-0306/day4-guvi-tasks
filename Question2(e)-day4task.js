var arr = ["hello", "madam", "gowtham", "skd"];

var palindrome = (word) => {
  return word === word.split('').reverse().join('');
};

var palindromeArrow = (array) => {
  return array.filter(palindrome);
};

var result = palindromeArrow(arr);

if (result.length > 0) {
 // console.log(' below is the pallindrome:');
 console.log("Pallinromes : ");
  console.log(...result);
} else {
  console.log('NO PALINDROME');
}


// o/p
// Pallinromes : 
// madam