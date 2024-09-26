//addition --> no parameters +  no return value

function add()
{
    num1 = 10
    num2 = 20
    res = num1 + num2
    console.log("Addition = "+ res)  
}
add()

//sub --> parameters + no return value

function sub(num1,num2)
{
    sum = num1 - num2
    console.log("Substraction "+ sum)
}
sub(30,10)

//multiply -->  parameters + return value

function multiply(num1,num2)
{
    sum = num1 * num2
    return sum
}
res = multiply(10,20)
console.log("Multiplication " + res)

//div --> no parameters +  return value

function div()
{
    num1 = 10
    num2 = 3
    res = num1 / num2
    return res
}
res = div()
console.log("Division  " + res)