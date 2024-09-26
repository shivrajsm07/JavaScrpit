// Stack (Primitive), Heap (Non-Primitive)

let firstName = "shivraj"

let lastName = firstName
lastName = "machigadkar"

console.log(firstName);
console.log(lastName);


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivraj@google.com"

console.log(userOne.email);
console.log(userTwo.email);


