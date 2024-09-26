class Student{
    constructor(roll,name){
        this.roll = roll;
        this.name = name;
    }
    study() {
        console.log("Studying Js")
    }
    revise(){
        console.log("Revising Js")
    }
}
//object creation
s1 = new Student(101,"Shiv");
s2 = new Student(102, "Ansh");
console.log(s1.roll);
console.log(s1.name);
s1.study();

//adding new property(state)
s1.email = 'Shiv@1234.com'
console.log(s1.email);
console.log(s1)

//deleting property(state)
delete s1.roll
console.log(s1)
console.log('------------------------------------------------')
console.log(s2.roll);
console.log(s2.name);
s2.revise();

//accessing properties
// console.log(s1['name'])
// console.log(s2['name'])

//using for loop
for( key in s1){
    console.log(s1[key])
}
