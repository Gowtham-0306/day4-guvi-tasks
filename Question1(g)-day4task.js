var arr = [ 1,2,2,3,3,4,4,5,6];


console.log("Below cod is anonymous fun");
var DuplicateAnonymous = function () {

var res = new Set (arr);
return [...res];


};


console.log(DuplicateAnonymous());

console.log("Below cod is IIFE fun");


( function () {

    var res = new Set (arr);
    console.log([...res]);
    



}

) ();

// o/p
// Below cod is anonymous fun
// [ 1, 2, 3, 4, 5, 6 ]
// Below cod is IIFE fun
// [ 1, 2, 3, 4, 5, 6 ]
