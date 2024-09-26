let pr = new Promise(
            function (resolve, reject) {
                console.log("some async task");
                resolve();
            }
);
pr.then(
    function () {
        console.log("promise consumed");
        
    }
)