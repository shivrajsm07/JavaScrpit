//this keyword

//regular function
st1 = {
    roll : 101,
    name : 'shivraj',
    info : function(){
        console.log('regular info function');
        console.log(this.roll + " " + this.name);
        console.log(this);
    }
}
st1.info();

//Arrow function
st2 = {
    roll : 202,
    name : 'yuvraj',
    info : () => {
        console.log('arrow info function');
       
        console.log(this);
    }
}
st2.info();