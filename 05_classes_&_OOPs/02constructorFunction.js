/* constructor function */

// build multiple instances from single object literal

// const promiseOne = new Promise()
const data = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`wellcome ${this.username}`)
    }
    
    return this // optional
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Chai aur code", 12, true)

console.log(userOne.constructor) // reference of itself
// console.log(userTwo)

console.log(userOne instanceof User) // check the instance 
//constructor function always gives a new instance

// -> ( new keyword)
//   1) when new keyword is used empty object(instance) is created.
//   2) constructor function is called because of new keyword
//      it pack all the arguments in constructor function and give it to us.
//   3) ye aapka jo 'this' keyword hai jo bhi aapne arguments likhe hai vo sb isme inject ho jate hai
//   4) we get in function.

