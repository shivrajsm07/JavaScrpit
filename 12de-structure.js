//  || ********************* De-Structuring of objects ******************* ||

const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "shiv"
}

// course.courseInstructor

const {courseInstructor : instructor} = course     // -----> this method is used to de-structure 

console.log(instructor);