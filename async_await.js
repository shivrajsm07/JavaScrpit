//   Async function returning non-promise value.

//  Example 1 : 

// async function fun() {
//     return "kodnest";
// }
// f = fun();
// console.log(f);

// ------------------------------------------------------------------

// Async Function Returning Promise :

// Example 2 :

// let p = new Promise(
//   function (resolve, reject)  
//   {
//     resolve("Data from promise");
//   }
// );
// async function fun() {
//     return p;
// }
// f = fun();
// console.log(f);

// f.then(
//     function(promiseData)
//     {
//         console.log(promiseData);
        
//     }
// );




// ---------------------------------------------------------


//   Handling promise using normal function :

//  Example 3 :


// let p = new Promise(
//     function (resolve, reject)  
//     {
//       resolve("Data from promise");
//     }
// );
// //   Handling promise using normal function :
// function fun1() {
//         p.then(
//             function(data)
//             {
//                 console.log(`Promise handled by normal function : ${data}`);
                
//             }
//         );
// }
// fun1();

// //   Handling promise using async function :
// async function fun2() {
//     let data = await p;
//     console.log(`Promise handled by async function : ${data}`);   
// }
// fun2();



//   -------------------------------------------------------------------- ||

// Example 4 :

let p = new Promise(
    function(resolve, reject)
    {
        setTimeout(
            function()
            {
                console.log("Data from promise");
                
            }
        ,4000);
    }
);

// Handling promise using normal function :  
//  ( Note : In this normal promise function instruction 1
//  is executed and 2 instruction will not execute because 
// of setTimeOut it will wait until time is covered, 
// but instruction 3 will be executed it will not wait until 2 gets executed ).

// function fun1(){
//     console.log("Instruction 1");
//     p.then(
//         function(data)
//         {
//             console.log("Instruction 2 :" +data);  
//         }
//     );
//     console.log("Instruction 3");   
// }
// fun1();


// Handling promise using async function :

// ( Note : But in Async promise function we use { await },
//  hence it will wait until the instruction 2 will be executed
//  and then instruction 3 will be executed ).

async function fun2()
{
    console.log("Instruction 1");
    let data = await p;
    console.log("Instruction 2 : " + data); 
    console.log("Instruction 3");
}
fun2();