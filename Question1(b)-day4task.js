var stringArray = ["apple", "banana", "cherry"];

console.log("The below function is Anonymous");
const titleCaseConverter = function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

// Call the function with the stringArray
var capsAnonymous = titleCaseConverter(stringArray);

// log the result
console.log(capsAnonymous); // Output: ["Apple", "Banana", "Cherry"]



console.log(" The below function is IIFE");

var capsIife = ( function (strs) {
return strs.map ( function (words) {


    return words.charAt(0).toUpperCase() + words.slice(1)


}


)




}

) (stringArray) ;

console.log(capsIife);

//o/p
//The below function is Anonymous
// [ 'Apple', 'Banana', 'Cherry' ]
 // The below function is IIFE
// [ 'Apple', 'Banana', 'Cherry' ]