const accountId = 1432323
let accountEmail = "hitesh@google.com"
var accountPassword = "12222"
var accountPassword = "3" // re-declaration

/*
Global Object Property ----------------->
   - In a web browser, declaring a variable with var at the global level (outside of any function) adds it as a property of the window object.
*/

/* 

var vs (let and const)
    Scope: let and const have block-level scope, meaning they are only accessible within the block they are declared in, unlike var which has function or global scope.

*/

function a(){
    // var xyz = 1;
}

// console.log(xyz) // xyz is not defined because var is function scope


// let a = 1
// let a = 1 // no re-declaration

accountCity = "Jaipur" // we can also do this in js 
let accountState

// initially js don't use block scope 

/* 
    prefer not to use var
    because of issue in block scope


*/

try {
    console.log(b); // Error: Cannot access 'b' before initialization
} catch (error) {
    console.log(error + "")
}
let b = 2;

accountEmail = "hc@hc.com"
accountPassword = "2323232"
accountCity2 = "benguluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])

// hoisting in let and const 

// -> console.log(a); let a = 10; before execution a is don't stored in global instead in script

// The Temporal Dead Zone (TDZ) :- in JavaScript refers to the period of time during which a variable is in scope but cannot be accessed because it has not yet been initialized. This concept is primarily associated with let and const declarations.

// const declaration and initialization in the same line.

//type error - assigning const again
//syntax error - const a;
// reference error - assigning before initialization