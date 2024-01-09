var arr = [1, 5, 7, 8, 9, 10];
console.log('The Below code is for immediate Function ');
var primeNumAnonymous = function() {

var primeNums = [];
for (var i = 0; i < arr.length; i++) {
  var count = 0;  


  for (var j = 1; j <= arr[i]; j++) {  
    if (arr[i] % j === 0) {  
      count++;
    }
  }

  if (count === 2) {  
    //console.log(arr[i]);
    primeNums.push(arr[i]);
  
    
  }
}
return primeNums;
}


console.log(primeNumAnonymous());

console.log('The Below code is for IIFE Function ');

 var iifePrimeNums = (function () {
  var primeNumbers=[];
    for (var i = 0; i < arr.length; i++) {
        var count = 0;  
      
        for (var j = 1; j <= arr[i]; j++) {  // Change the condition to include arr[i] and use <=
          if (arr[i] % j === 0) {  // Check if arr[i] is divisible by j
            count++;
          }
        }
      
        if (count === 2) {  
          primeNumbers.push(arr[i]);

        }
      }

 console.log(primeNumbers);
 }) (); 

// o/p
// The Below code is for immediate Function 
// [ 5, 7 ]
// The Below code is for IIFE Function 
// [ 5, 7 ]