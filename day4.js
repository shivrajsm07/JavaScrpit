
s1 = new Object();
s1.roll = 101;
s1.name = 'shivraj';
s1.cgpa = 7.1;

s2 = {
    roll : 202,
    name : 'Yuvraj',
    cgpa : 8.2
}

function accessStudent(s)
{
    console.log('roll : ' + s.roll)
    console.log('name ' + s.name)
    console.log('cgpa : ' + s.cgpa)

}
accessStudent(s1)
accessStudent(s2)