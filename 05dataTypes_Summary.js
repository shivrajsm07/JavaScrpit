//Primitive 

/* Types :
    1) String.
    2) Number.
    3) BigInt.
    4) Boolean.
    5) Null.
    6) Undefined.
    7) Symbol.

*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp  = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber = 3456784567834567n

/*Reference (Non primitive)

Array, Objects, Functions
*/

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}


const myFunction = function(){
    console.log("Hello world")
}



console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof bigNumber);

