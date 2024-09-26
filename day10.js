//Hoisting :

//regular - We call a regular function before or after its declaration
fun();
function fun() {
    console.log("regular function executing")
}


//arrow function - We can call an arrow function after its declaration but not before its declaration
// arr();         //error
// arr = () => 
// {
//     console.log("arrow function executing")
// }


console.log("===========================================")
f = function factorial(num)
{
    if(num==1)
    {
        return 1;
    }
    return num * factorial(num-1);
}
console.log(f(5));
console.log(f(7));

console.log('-------------------------------------------------')

//Arrow functions
arr = () => {
    console.log("arrow executing");
}
arr();

console.log('------------------------------------------------------')

s = (a,b) => {
    sum = a + b;
    return sum;
}
console.log(s(10,20));
console.log(s(5,10,15,20));
console.log('------------------------------------------------------')



//spread operator - not allowed
s2 = () =>
{
    sum = 0;
    for(i of arguments)
    {
        sum = sum + i;
    }
    return sum;
}
console.log(s(10,20));
console.log(s(5,10,15,20));
console.log('------------------------------------------------------')
