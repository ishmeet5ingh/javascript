/* ************** functions ***************** */

function sayMyname(username = "sam"){ // this is function definition
    console.log(`${username}`)
}

let add = (a, b /* parameters */) => { 
    return a + b;
}
// console.log(add(1, 3 /* arguments */))
sayMyname // this is function reference
// console.log(sayMyname)

// sayMyname("hitesh") // function call // execution

function calculateCartPrice(...num1 /* rest operator */){
    return num1
} 

console.log(calculateCartPrice(200, 400, 500)) // converting all values in array

// we can also pass array and objects in the function.


