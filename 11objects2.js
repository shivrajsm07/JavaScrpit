//     || *********************  O B J E C T S ****************** ||

//  const tinderUser = new Object()      -----> songletone object

const tinderUser = {}                   // ------> non singletone object

tinderUser.id = "123abc"
tinderUser.name = "shiv"
tinderUser.isLogggedIn = false
//  console.log(tinderUser);



//  we can also create nested objects :
const regularUser = {
    email : "shiv@gmail.com",
    fullName : {
        userFullName:{
            firstname: "shiv",
            lastname: "machigadkar"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);




//  Using Object.assign() :   -------> It is used to assign to object to another using assign method
/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//  const obj3 = { obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)      // {} - braces are known as target, and the objects are known as source. 
console.log(obj3);
*/


//  Using (...obj1...obj2) (...)are known as spread operators through which we can assign variables.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
 const obj3 = {...obj1, ...obj2}
//  console.log(obj3);



//  This is the method through which we can access key and values using objects.
const users = [
    { 
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 1,
        email: "shiv@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));       //  ------> Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(tinderUser));     //  ------> Returns an array of values of the enumerable properties of an object.
console.log(Object.entries(tinderUser));    //  ------> Returns an array of key/values of the enumerable properties of an object.

console.log(tinderUser.hasOwnProperty('isLogged'));     // ------> Determines whether an object has a property with the specified name.






//   Example :

//      1) No parameter + no return value

function add()
{
    num1 = 10
    num2 = 20
    sum = num1 + num2
    console.log(`Addition = ${sum}`);  
}
add()



//     2) Parameter + no return value

function sub(num1, num2)
{
    res = num1 - num2
    console.log(`Substraction = ${res}`);
}
sub(30, 10)



//      3)  Parameter + return value

function mul(num1, num2)
{
    res = num1 * num2
    return res
}
res = mul(10, 20)
console.log(`Product = ${res}`);


//      4)  No parameter + return value

function div()
{
    num1 = 10
    num2 = 3
    res = num1 / num2
    return res
}
res = div()
console.log(`Quotation = ${res}`);

