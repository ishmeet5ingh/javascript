const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        console.log(this)// current context(object properties)
    } 

}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)


