var arr = [1,2,3,4,5,6,7,8,9,10];
var oddNumbersAnonymous = function () {
    console.log('The Below code is for Anonymous Function ');
     var oddNumberLists = [];
for (var i=0 ; i<arr.length ; i ++) {

if ( arr[i] % 2 !== 0) {
   //console.log('The odd numbers are ' + arr[i]);
  oddNumberLists.push(arr[i]);
}

}
 console.log(oddNumberLists);
}
oddNumbersAnonymous();

console.log('The Below code is for IIFE Function ');
 (function  OddNumberImmediate() {
  var oddNumberLists = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        //console.log('The odd numbers are ' + arr[i]);
        oddNumberLists.push(arr[i]);
      }
    }
    console.log(oddNumberLists);
  })  ();

  

//o/p
// The Below code is for Anonymous Function 
// [ 1, 3, 5, 7, 9 ]
// The Below code is for IIFE Function 
// [ 1, 3, 5, 7, 9 ]