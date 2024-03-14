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
const obj3 = {...obj1, ...obj2} // spread operator.
// console.log(obj3)
// console.log(obj1)

// console.log(Object.keys(tinderUser))// keys
// console.log(Object.values(tinderUser)) // values
console.log(Object.entries(tinderUser)) // array within array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
 
const course = { 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//*********************Destructuring******************** */

// Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a more concise and expressive way. It's a syntax that simplifies the process of working with the properties or elements of objects and arrays.z

// const {courseInstructor: instrutor} = course //destructuring
// console.log(instrutor)
const { coursename, price, courseInstructor} = course 
console.log("coursename", price)

//******************another example of destructuring in object--------> */
const person = { name: 'John', age: 30, city: 'New York' };

// Extracting values using destructuring
const { name, age, city } = person;

console.log(name);  // Output: John
console.log(age);   // Output: 30
console.log(city);  // Output: New York

// *********************** another example****************

const anotherPerson = { name: 'John', age: 30, city: 'New York' };

// Renaming variables during destructuring
const { name: personName, age: personAge, city: personCity } = anotherPerson;

console.log(personName);  // Output: John
console.log(personAge);   // Output: 30
console.log(personCity);  // Output: New York

//************************************************/

//******************another example of destructuring in array--------> */



//************************************************/


// const navbar = ({/*destructuring*/}) =>{
//  console.log(course)
// }
//*****************End of destructuring************ */
const numbers = [1, 2, 3, 4, 5];

// Extracting values using destructuring
const [first, second, third] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: 3

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
