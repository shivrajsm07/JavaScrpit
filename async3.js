new Promise(
    function(resolve, reject)
    {
        console.log("Fetching user info...!");
        // let data = "shiv@gmail.com"          ---> Approach - 1
        // resolve(data)
        resolve(
            {
                username: 'shiv',
                email: 'shiv@gmail.com',
                address: 'bengaluru'
            }
        );
    }
).then(

    //function(data)
    // {
    //     console.log(data);
        
    // }
    function(user)
    {
        console.log(user); 
        console.log(user['username']); 
        console.log(user['email']); 
        console.log(user['address']); 
    }
)