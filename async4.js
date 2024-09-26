new Promise(
    function(resolve, reject)
    {
        console.log("Payment under progress...!");
        resolve(1599);
    }
).then(
    function(amt)
    {
        console.log(`Payment received : ${amt}`);
        return new Promise(
            function(resolve, reject)
            {
                console.log("Delivery under progress...!");
                resolve("shirt");
            }
        )
    }
).then(
    function(product)
    {
        console.log(`Product received : ${product}`);
        
    }
);