function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called " + username)
}

function createUser(username, email, password){
    // SetUsername(username) // calling, but while execution, context remove from the callstack before reaching to outer function, variables vanish.// only reference pass.

    SetUsername.call(this, username)// using call to hold the reference// don't use SetUsername()'s 'this' createUser is giving its own 'this'.
    // current execution context kissi or function ko pass kr deta hai .call() 

    // .call() allows you to set the context (the value of this) explicitly when calling a function.
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "124")

console.log(chai);

console.log(chai instanceof SetUsername)
