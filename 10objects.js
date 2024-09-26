//      || *************************  O B J E C T S  ****************** || 

// singleton
// Object.create

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name : "shivraj",
    "full name" : "shivraj machigaadkar",
    [mySym] : "mykey1",         // ----> [] are used to declare a symbole
    age : 18,
    location : "Belgaum",
    email : "shiv@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//  console.log(JsUser[mySym]);


 JsUser.email = "shivraj@gamil.com"
 // Object.freeze method :     -------> this is used to restrict the object, hence it cannot be accessed.
// Object.freeze(JsUser)
 JsUser.email = "shivraj@sm.com"
//  console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());