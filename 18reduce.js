//  ****************************************   R E D U C E   A N D   M A P   ******************************************  ||

// const coding = ["js", "riby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// *****************   F I L T E R ***************************


// Example 2 :  ------------------> (With scope) 

// whenever we use scope ({}), then it is mandatory to use return keyword or else it will return empty array.

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNumbs);

// Example 2 :     ---------->   (without scope)
// const newNumbs = myNums.filter( (num) => 
//      num > 4
// )
// console.log(newNumbs);




// Example :

const books = [
    {title: 'Book one', genre: 'foction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'non - foction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'history', publish: 1999, edition: 2007},
    {title: 'Book four', genre: 'science', publish: 1989, edition: 2010},
    {title: 'Book five', genre: 'foction', publish: 1981, edition: 2011},
    {title: 'Book six', genre: 'history', publish: 1984, edition: 1995}
]

// let booksUser = books.filter( (bk) => bk.genre === 'history')

let booksUser = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'history'})

// console.log(booksUser);





// *****************************   M A P ***************************
                            //  ----------
// examples :

// const myNums = [1, 2, 3, 4, 5, 6, 7 , 8]

// const newNumbs = myNums
//                     .map( (num) => num * 10)
//                     .map((num) => num + 1)
//                     .filter( (num) => num >= 40)
// console.log(newNumbs);


// Example 2 :

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)



// example 2:
// const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);



// Example 3:
const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'Python course',
        price : 1999
    },
    {
        itemName : 'Data science course',
        price : 12999
    }
]

const priceToPay= shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
