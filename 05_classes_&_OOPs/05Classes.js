// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
        console.log("hello")
    } // execute authometically as the instance is       created
// method in class
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`

    }
}

const chai = new User("chai", "chai@gmail.com", "124")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// behind the scene ---------------------->

//  constructor function->

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// adding property to constructor function by prototype

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const chai = new User("chai", "xyz@gmail.com", "xyz")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());