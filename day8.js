//      ***************    Overloading in JavaScript **************** ||


// Example 1 :

function add()
{
    sum = 0;
    for(i of arguments)
    {
        sum = sum + i;
    }
    return sum;
}
console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10,20,30,40));




// Example 2 :

function add1(...args)
{
    sum = 0;
    for(i of args)
    {
        sum = sum + i;
    }
    return sum;
}
add1(10, 20);
add1(10, 20, 30);
add1(110, 20, 30, 40);