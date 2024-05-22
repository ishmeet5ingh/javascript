class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // replacement of User.call(this, username) where User is constructor funciton.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "xyz@gmail.com", "xyz")

// chai.addCourse()

const masalaChai = new User("masalaChai")
console.log(masalaChai.logMe()) 
// console.log(chai.logMe())

console.log(masalaChai instanceof User)
