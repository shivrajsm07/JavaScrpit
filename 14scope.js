//      ||  ****************************  S C O P E  *************************  ||

// var c = 300              ------>  var is not used 

/*
const a = 200;              -------> these values are known as global scope.
let b = 300;
*/

let a = 10;                 // therefore if we give values in global scope the it will not affect in  block scope.
const b = 20;
// var c = 300;

if(true)                    //  -----> these values are known as block scope.
{
    let a = 100;
    const b = 20;
    // console.log("Inner : ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


// Example 1 :
function one() 
{
    const username = "shivraj"
    
    function two()              // function - 2 : can access all the variables of function one.
    {
        const website = "youtube"
        // console.log(username);  
    }
    // console.log(website);     // can't declare outside the function2, it will give error.

    two()
}
one()



// example 2 :
if(true)
{
    const username = "shivraj"
    if(username === "shivraj")
    {
        const website = " youtube"
        // console.log(username + website);
    }   
    // console.log(website);
}
// console.log(username);


// *********************** interesting ********************** //

console.log(addone(5));         // we can print output before or after function.
function addone(num) {
    return num + 1    
}



// addTwo(5)
const addTwo = function(num)        // can't declare before variable.
{
    return num + 2
}
addTwo(5)