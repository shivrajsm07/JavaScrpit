//    || ************************  F U N C T I O N S  &  P A R A M E T E R S  **********************  ||

// Functions in JS :

// function myName(){
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("V");
// }
// myName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3, "4")

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);

function loginUserMessage(username ="sam"){            // -----> if we pass a defalut value in this then is will display defalut value and if the values is passed then is will over wrtie the default value.
   //method 1 - if(username === undefined)
        if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shiv"));   // ----> if we pass string then it will return "shiv just logged in".
// console.log(loginUserMessage(""));         // ----> if we pass empty string then it will return "just logged in".
// console.log(loginUserMessage());         // ----> if we don't pass any thing then it will return undefined.



//      || ******************************* F U N C T I O N S    &   O B J E C T S    I N    A R R A Y  *****************************  ||

function calculateCartPrice(val1, val2, val3, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500));


const user = {
    username : "shiv",
    prices : 199
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);      -----> if the user changes price to prices in object then it will return undefined.
handleObject({username: "shiv", price: 399})




// ARRAY[ ] :

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) 
{
    return getArray[1, 3]    //   ---------> this return keyword is used to return value in "getArray"
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 800, 1000]));      //  -----> if user tries to give default values then we can give here so the value changes according to user.





//  ************************  A R R O W   F U N C T I O N S  **************************  ||

//     This keyword :

const user1 = {
    username : "shivraj",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);    
    }
}
// user1.welcomeMessage()
// user1.username = "shiv"
// user1.welcomeMessage()

// console.log(this);        // ------> it returns empty object.


// function chai()             // ----> unable to use this keyword in function.
// {
//     let username = "sandesh"
//     console.log(this.username);  
// }
// chai()



//  Arrow functions :

const shiv = () => {
    let username = "raj"
    // console.log(this);      // -----> it returns empty object.
    // console.log(this.username); 
}
shiv()


//  ---------------------------------------------

// Basic Arrow Functions :


// Explicit return :    Note : if we use {} braces then we should use return keyword.


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3, 4));




//  Implicit return :

// Note : if we don't use {} braces then we should not use return keyword.
// const addtwo = (num1, num2) =>  num1 + num2

// console.log(addtwo(3, 4));



//       Note : if we want to return object the we should () braces.
const addtwo = (num1, num2) =>  ({username : "shivraj"})

console.log(addtwo(3, 4));




