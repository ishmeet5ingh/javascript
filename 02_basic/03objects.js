 // singleton 
 // if we declare object with literals no singleton build
 // objects with constructor singleton
// object.create

 // object literals

 const mysym = Symbol("key1"); // typeof - symbol
 
 const jsuser = {
    name: "Hitesh", // by default name is also string
    age: 18, 
    [mysym]: "key2", // have to use [] to use it like a symbol // symbol key
    "full_name": "Ishmeet singh",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogindays: ["monday", "Saturday"]
 }
 
 console.log(jsuser.email)
//  // or 
// console.log("undefined" + jsuser.full_name) // gives undefined because "full_name"
 console.log(jsuser["full_name"]) // right way
 console.log(jsuser[mysym]) // 
 
//  console.log(typeof mysym)
 


// Object.freeze(jsuser) // freeze the object changes can't be done
jsuser.name = "hello" //
// console.log(jsuser)


jsuser.greeting = function(){
    console.log("hello js user ")
}

console.log(jsuser.greeting())

const emptyObj = {1: "1"}
console.log(Object.keys(emptyObj))

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
