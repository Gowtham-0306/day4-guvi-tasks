var arr = [1,2,3,4,5,6,7,8,9,10];
var oddNumbersArrow = () => {
    console.log('The Below code is for arrow Function ');
     var oddNumberLists = [];
for (var i=0 ; i<arr.length ; i ++) {

if ( arr[i] % 2 !== 0) {
   //console.log('The odd numbers are ' + arr[i]);
  oddNumberLists.push(arr[i]);
}

}
 console.log(oddNumberLists);
}
oddNumbersArrow();



// o/p
// The Below code is for arrow Function 
// [ 1, 3, 5, 7, 9 ]