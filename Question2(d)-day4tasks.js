var arrayy = [1, 2, 3, 4, 5, 6,7];

var primeNumArrow = (arr) => {

  
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
console.log("Prime numbers are");
console.log(primeNumArrow(arrayy));


// o/p
// Prime numbers are
// [ 2, 3, 5, 7 ]