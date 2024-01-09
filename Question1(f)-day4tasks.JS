var arrt = [-3, -1, 0, 2, 4];
var arr = [...arrt].sort((a, b) => a - b);


var len = arr.length;
var SortAnnonymous = function () {

  if ( len % 2 ==0) {

return ((arr[len/2] + arr[len/2 - 1])/2 );

  }

else
return (arr[Math.floor(len/2)]);



};

console.log(SortAnnonymous());

var sortIife = ( function () {

  var len = arr.length;

  if ( len % 2 ==0) {

    return ((arr[len/2] + arr[len/2 - 1])/2 );
      
      }
    
    else
    return (arr[Math.floor(len/2)]);
    

   


}
) ();
console.log(sortIife);

// o/p
//0
//0