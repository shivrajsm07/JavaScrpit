//   || ************************  Immediately invoked function expressions(ITFE) ******************************** ||


// Note: () it is used to define the function, while the second () function is used to get the output.
(function db() {
    console.log(`db connected`);
    
})();           // note : give semicolen(;) at the end of function. so that it can recognize another function ofr else it will throw an error.

( (name) => {
    console.log(`db connected two ${name}`);
}) ('shivraj')
