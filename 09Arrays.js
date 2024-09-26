//   *****************  A R R A Y S ******************

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ["ironmaan", "batman"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3])


//     || -----------------  Methods in Array ------------------- ||

//Push method :             -----> add elements at end of array.
// myArr.push(6)
// console.log(myArr);

//Pop Method:               -----> removes elements from end of array.
// myArr.pop(7)

//Unshit method :           ------>  add elements at starting of array.
// myArr.unshift(9)

//Shift method :            ------> removes elements from starting of array.
// myArr.shift(9)


// Includes method :           -------> checks if the elements are available.
// console.log(myArr.includes(9));


//IndexOf method :              -------> checks the index of element.
// console.log(myArr.indexOf(9));


//Join method :                 ------>  // Adds all the arrays into a string.
// const newArr = myArr.join()          
// console.log(myArr);
// console.log(newArr);


//slice method :                ------> // In slice method it gives result as we pass start and end value, and it gives value which is close to end value
// console.log("A =", myArr);  
// const myn1 = myArr.slice(1, 3)


// console.log(myn1);
// console.log("B =", myArr);

// // splice method :           ------> // In splice method its retrieves the values which are specified in method and after the result it removes the values from the original array.
// const myn2 = myArr.splice(1, 3)         
// console.log("C =", myArr);
// console.log(myn2);



const marvel_heroes =["thor", "ironman", "spiderman"]

const dc_heroes = ["superman", "batman", "flash"]

//  marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);      ------->    //By this we can access or can remove


//Concat method :                       -------> which is used to concat 2 elements.
// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// const allHeroes = [...marvel_heroes, ...dc_heroes]   ------->   //concator spread operator
// console.log(allHeroes);

// const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]      // returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//  const real_another_arr = another_arr.flat(Infinity)

//  console.log(real_another_arr);


//Array.isArray method :            -----> checks if it is array.
console.log(Array.isArray("Shiv"));

//Array.from method :               ------>  // converts string into array.
console.log(Array.from("Shiv"));       
console.log(Array.from({name : "Shiv"}));    // ---->    //cannot convert string to array, hence it returns empty array.



// Array.of method :        ------->  // Returns a new array from a set of elements.
let score1 = 100;
let score2 = 200; 
let score3 = 300;
let score4 = 400;
let score5 = 500;
console.log(Array.of(score1, score2, score3, score4, score5));

