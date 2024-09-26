const accountId = 144553
let accountEmail = "shivraj@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2  --> not allowed

accountEmail = "sm@gmail.com"
accountPassword = "54321"
accountCity = "Bengal"

/* 
Prefer not to use var
Cause of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword]);