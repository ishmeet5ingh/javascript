class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    } // if we define getter then have to define setter.
    // when we want to get any value outside the class
    
    // set password(value){ // parameter is mendatory // 
    //     this.password = value // problem // same for getter 
    // }// want to set any value inside the class.
    set password(value){ // parameter is mendatory
        this._password = value // solution
    }// want to set any value inside the class.
}

// Maximum call stack size exceeded. -> error
// why error -> constructor is calling again and again

// problem => consturctor and setter both are setting the password dono ke bich ek race lg jati hai mai set krunga mai set krunga and that race is problematic
// solution => instead of "password" "write "_password" set ✔️


const hitesh = new User("ishmeet@singh.ai", "abc")
console.log(hitesh.password)
console.log(hitesh.email)

// if we don't want to give the access of password to anyuser the we use getters and setters

