function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
         //'Object.defineProperty()' is a method in JavaScript that allows you to add a new property or modify an existing property on an object with more control over its behavior. This method provides fine-grained control over various property attributes, such as enumerability, writability, and configurability.  
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value // _password is private
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email)
console.log(chai._password)

