//  Lexical environment, Scope chaining & closers :

function outer()
{
    var x = 10;

    function inner()
    {
        var y = 20;
        console.log(`x = ${x}`);
        console.log(`y = ${y}`);
        console.log(`z = ${z}`);
    }
    inner();
}
var z = 30;
outer();