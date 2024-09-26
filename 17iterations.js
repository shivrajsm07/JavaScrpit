//  || ********************  L O O P S  **************************************  ||

// For loop :

// example 1 :
// for (let i = 1; i <=10; i++) {
//     const element = i;
//     console.log(i);
// }


// Example 2 : 

// for (let i = 1; i <=10; i++) {
//     const element = i;
//     if (element == 5) 
//     {
//         // console.log("5 is the best number");
//     }
//     // console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 5; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);         
//     }
// }



// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }




//  || ********** B R E A K ************  ||

// for (let index = 1; index < 10; index++) {
//    if(index == 5)
//    {
//     console.log(`detect 5`);
//     break;
//    }
//    console.log(`Value of i is ${index}`);  
// }


//   || ***************  C O N T I N U E  *******************  ||


// for (let index = 1; index <=10; index++) {
//     if(index == 5)
//     {
//      console.log(`detect 5`);
//      continue;
//     }
//     console.log(`Value of i is ${index}`);  
//  }



// --------------------------------------------------------------------------------------


//   || *********************** W H I L E  L O O P  *********************  ||

// let index = 0
// while (index <= 10)
// {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }



// let myArray = ['flash', 'batman', 'superman']

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }



// ---------------------------------------------------------------

//  ||  *****************************   D O - W H I L E  L O O P  ********************  ||

// let score = 11

// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);






//  ||******************************** **********************************************

//  || ********************************   F O R   O F   L O O P  **************************************************************  ||

// For of loop :  Can used for Iterating (String, Arrays, Objects).

// ["", "", ""]
// [{}, {}, {}]


// example : 1

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
    
// }



//  example 2 :

// const greeting = "Hello world!"

// for (const greet of greeting) {
//     console.log(greet);
    
// }




// ||  **************************  M A P ***********************************  ||

// Map : The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
    // => Its doesn't allow duplicate values and gives values in sequential order.

// example 1 :
// const map = new Map()
// map.set('In', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// // console.log(map);

// // we can de-structure using for of loop:

// for (const [key, value] of map) {
//     console.log(key, ": ", value);
// }




// example 2:

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ": ", value);
    
// }






//    ++++++++++++++++++++++++++++++++   F O R   I N    L O O P   ++++++++++++++++++++++++++++++++++++++++++++++

//  For in :



// exmample 1 :

// const myObject = {
//     js : 'JavaScript',
//     cpp : 'C++',
//     rb : "ruby",
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//        console.log(myObject[key]);
       
//     }




// exmample 2 :

// const program = ["js", "rb", "py", "java", "cpp"]

// for(const key in program)
// {
//     console.log(program[key]);
    
// }





// ++++++++++++++++++++++++++++++++++++  F O R    E A C H   L O O P   ++++++++++++++++++++++++++++++

// example 1 :
const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })


//  coding.forEach(printMe)



//  example 3 :

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })



//  we can also acess objects using foreach.

const myCoding = [
    {
    languageName : "JaaScript",
    languageFileName : "Js"
    },
    {
    languageName : "Java",
    languageFileName : "Js"
    },
    {
    languageName : "Python",
    languageFileName : "Py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})