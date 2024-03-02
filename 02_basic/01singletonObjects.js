// const tinderUser = new Object() // singleton object // constructor
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Ishmeet",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = Object.assign({/*target object*/}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(obj1)

// console.log(Object.keys(tinderUser))// keys
// console.log(Object.values(tinderUser)) // values
// console.log(Object.entries(tinderUser)) // array within array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instrutor} = course //destructuring
console.log(instrutor)

const navbar = ({/*destructuring*/}) =>{
 console.log(course)
}

navbar()

/************** APIs ************** */

// receive data in json form
// json is js notation
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/
