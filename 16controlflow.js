//      || *******************  C O N T R O L   F L O W S ************************  ||

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature === 41)
// {
//     console.log("less than 41");
// }
// else
// {
//     console.log("temperature is greater than 41");
// }
// console.log("Executed");

// const score = 200

// if(score > 100)
// {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);



// if condition:

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course");
}

const loggedInFromGoogle = true
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail || guesUser)
{
    console.log("user logged in");
    
}



//   || ******************  S W I T C H  C A S E  *******************  ||

// const month = 3
// switch (month) 
// {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default casse match");
//         break;
// }



//  ||   ***************** truthy and falsy values ****************  ||

//  Falsy values :  false, 0, -0, bigInt, 0n, " ", null, undefined, NaN



// const useEmail = []
// if(useEmail.length === 0)
// {
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("object is empty");
}


//  || ****************** ****************

// Nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);



//  Terniary operator :

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80") : console.log("more than 80");
;

 