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
// console.log("1" + 2);
// console.log(1 + 2 + "2")
// console.log((1+2) + "2") // correct way

// console.log(+"") //also conversion

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
console.log(null == 0)
console.log(null >= 0) // this work differently from equality operator
console.log(null <= 0) // value conversion

// === check value strictly

console.log("2" == 2)