var arr = [1, 2, 3, 4,5,6,7];

var len = arr.length;

 var rotationAnnonymous = function() {
for ( var i=1 ; i <= 2 ; i ++) {

arr.unshift(arr.pop());
console.log(" rotation no " + i  );
console.log(arr);
}
 
 };
 rotationAnnonymous();

var arr1 = [ 1,2,3,4,5,6,7];

 ( function () {

    for ( var i=1 ; i <= 2 ; i ++) {

        arr1.unshift(arr1.pop());
        console.log(" rotation no " + i  );
        console.log(arr1);
        }
         




 }


 ) ();


 // o/p
 // rotation no 1
// [
  // 7, 1, 2, 3,
  // 4, 5, 6
// ]
 // rotation no 2
// [
  // 6, 7, 1, 2,
  // 3, 4, 5
// ]
 // rotation no 1
// [
  // 7, 1, 2, 3,
  // 4, 5, 6
// ]
 // rotation no 2
// [
  // 6, 7, 1, 2,
  // 3, 4, 5
// ]



