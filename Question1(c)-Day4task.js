
var arr = [1,2,3,4,5];



var sumAnonymous = function() {
var total =0;

for ( var i =0 ; i<arr.length ; i ++) {
   total = total + arr[i];
   
} 
console.log("sum of the array");
console.log(total);
    }
    sumAnonymous();



 ( function sumImmediate() {

    var total =0;

    for ( var i =0 ; i<arr.length ; i ++) {
       total = total + arr[i];
       
    } 
    console.log("sum of the array");
    console.log(total);


    }
    ) ();


 // o/p
 //sum of the array
// 15
// sum of the array
//   15
