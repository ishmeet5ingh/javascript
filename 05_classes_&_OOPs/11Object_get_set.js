const User = {
    _email: 'h@hc.com', // '_email' private property
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    }, // getters and setters are method that are placing on the properties
    // memory se leker aane ka kaam (get)
    // this._email ko lekr aao and upper case krdo

    set email(value){
        this._email = value
    } // set says email is for me email is property not method
    // i will provide you a value and store it in the _email 
}

const tea = Object.create(User) //factory function 
console.log(tea.email);
