// let score = undefined
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

//"33" => 33
// "33abc" => NaN
// true => 1: false => 0

let isLoggedIn = "ishmeet";

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)


// ************ Operations ****************

let value = 3
let negvalue = -value
// console.log(negvalue)
// console.log(3**3) //power  
 
let str1 = "hello"
let str2 = "hitesh"
let str3 = str1 + str2

// console.log(str3)
// console.log("1" + 2 ); // 2 converted in string
// console.log(1 + 2 + "2")
// console.log((1+2) + "2") // correct way

// console.log(+"") //also conversion , 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 

// console.log(num2)

let gamecounter = 100
// console.log(gamecounter++) // 100 postfix
// console.log(++gamecounter) // 102 prefix

//relatoinal operations => (== =< =>)
// while comparing datatype do check 
// data types are compatible or not

console.log("2" > 3) //automatically convert the string in number
console.log(null == 0) // null is empty 0 is some value
console.log(null >= 0) // this work differently from equality operator
console.log(null <= 0) // value conversion
/* ---------reason why null<=, >= 0 is true--------
In JavaScript, when you compare null with a numeric value using the >= (greater than or equal to) operator, the result is true. This might seem counterintuitive, but it's due to the way JavaScript handles comparison and type coercion.

Here's why console.log(null >= 0) evaluates to true:

`Type coercion is the automatic conversion of values from one data type to another in a programming language. In JavaScript, type coercion occurs when you use operators or functions that expect values of a certain type, but you provide values of a different type. JavaScript will then`


Type Coercion: When you use the >= operator, JavaScript tries to convert the operands to a common type before making the comparison.
Null Coercion: When null is compared to a number, JavaScript coerces null to the number 0.
Comparison: After coercion, the comparison 0 >= 0 is made.
Result: Since 0 is equal to 0, the comparison evaluates to true.
So, the output of console.log(null >= 0) will be true.
console.log(null >= 0) // this work differently from equality operator
console.log(null <= 0) // value conversion
*/

// === check value strictly

// console.log("2" == 2) // true
// console.log("2"===2) // false