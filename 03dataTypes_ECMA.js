let scope = "33abc"

console.log(typeof scope);
console.log(typeof(scope));  // --> method


// conversion of data type 
let valueInNumber = Number(scope)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// values that  convert
/*
    "33" ==> 33
    "33abc" ==> NaN
    true ==> 1
*/


//Example of boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
    1 ==> true; 0 ==> false
    "" ==> false
    "shiv" ==> true
*/


//Example of String
let someNumber = 33

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);