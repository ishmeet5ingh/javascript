// # primitives
// primitives are call by values
// Passing Primitive Values (Call by Value):
// When you pass a primitive value (like a number, string, boolean, etc.) to a function, you are passing a copy of the actual value. Changes made to the parameter within the function do not affect the original value outside the function.'

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// # Reference (Non primitives)
// Array, objects, funcitons


// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) // false

const bigNumber = 39393939374399488883333333n
// for big int add "n" at the end
console.log(bigNumber)

const myFunction = function(){
    console.log("hello world");
}

let a = 1.1
console.log(typeof myFunction) // object function 


// ******************* memory *********************
 
// stack [primitives], Heap[non-primitive]
// stack => copy of value
// heap => reference of original value

let arr = [1, 2, 4, 5];
let b = [...arr] // creating copy of 'arr'
b[0] = 3;

console.log( arr)

