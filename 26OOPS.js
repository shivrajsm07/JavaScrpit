//    *********************    O O P S   ************************************  ||

// ------------>  (Constructor) :
class Student
{
    constructor(roll, name)
    {
        this.roll = roll;
        this.name = name;
    }
    study()
    {
        // console.log("Studing JavaScript");
    }
}

s1 = new Student(101, "shiv");
// console.log(s1.roll);
// console.log(s1.name);
s1.study();
s1.email = 'shiv@gmail.com';
// console.log(s1.email);
// console.log(s1);


// deleting properties:
delete s1.roll
// console.log(s1);

// accessing properties :
// console.log(s1['name']);

// using for in loop :
for(key in s1)
{
    // console.log(s1[key]);
    
}




// -------------------------------------------------------------------------------  ||

//            || ***********     Inheritence   *********  ||

class Employee
{
    constructor()
    {
        this.company = 'kodnest'
    }
    login()
    {
        console.log('login at 10 am');
    }
    task()
    {
        console.log('complete your task');
    }
}

class Developer extends Employee
{
    task()
    {
        console.log('complete your development task');
    }
    develop()
    {
        console.log('develop an application');
    }
}

class Tester extends Employee
{
    
    task()
    {
        console.log('complete your testing task');
    }
    test()
    {
        console.log('test an application');
    }
}

dev = new Developer()
console.log(dev.company);
dev.login()                 //inhereted
dev.task()                  //overridden
dev.develop()               //child-specific

t = new Tester()
console.log(t.company);
t.login()
t.task()
t.test()



