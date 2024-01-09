var stringArray = ["apple", "banana", "cherry"];


var stringcapsArrow = (arr ) => {


    return arr.map ( fun => fun.charAt(0).toUpperCase() + fun.slice(1)



    )

}

console.log(stringcapsArrow(stringArray));


// o/p
// [ 'Apple', 'Banana', 'Cherry' ]