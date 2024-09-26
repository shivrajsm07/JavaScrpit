class Employee{
    constructor(){
        this.company = 'kodnest';
    }
    login(){
        console.log('login at 10 am')
    }
    task(){
        console.log('complete your task')
    }
}
class Developer extends Employee{
    task(){
        console.log('complete your development task')
    }
    develop(){
        console.log('develop an application')
    }
}

class Tester extends Employee{
    task(){
        console.log('complete your testing task')
    }
    test(){
        console.log('test an application')
    }
}

dev = new Developer()
console.log(dev.company)
dev.login() //inherited
dev.task() //overridden
dev.develop //child-specific

tes = new Tester()
console.log(tes.company)
tes.login()
tes.task()
tes.test()