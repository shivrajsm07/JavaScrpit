//   || **********************  Numbers  ****************** ||

console.log("***********  Numbers ************");

const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 123.7898
console.log(otherNum.toPrecision(2));
console.log(otherNum.toPrecision(4));


const hundreds = 10000000
console.log(hundreds.toLocaleString());   //According to U.S standard
console.log(hundreds.toLocaleString('en-IN'));


//Commonly used
//Min_value
//Max_value

console.log('------------------------------------------------------------');


//   || ********************** Maths  ****************** ||




console.log(" || ********************** Maths  ****************** ||");

// console.log(Math);     // It is object and it has no. of labries.
// console.log(Math.abs(-4));     //usually it converts negative value into positive value.
// console.log(Math.round(5.66));
// console.log(Math.ceil(10.2));
// console.log(Math.floor(13.67));
// console.log(Math.min(2, 5 ,0, -1));
// console.log(Math.max(2, 5 ,0, -1));

console.log(Math.random());   //usually the value lies between 0 and 1.
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);