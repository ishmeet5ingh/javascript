class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){
        return `123`
    }// sometimes situations come u don't want to give access of this method to every object which is instanciate from this class, then use static which do this above line.
}


const hitesh = new User("hitesh")
// console.log(hitesh.createId())
console.log(hitesh.logMe())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone")

console.log(iphone.logMe());