//                      ||    *************    S T R I N G S   *************    ||

const name = "shivraj"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('SHIV')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "           shiv  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://shiv.com/shiv%20machi"
console.log(url.replace('%20', '-'));

console.log(url.includes('raj'));

console.log(gameName.split('-'));

console.log(gameName.small());

