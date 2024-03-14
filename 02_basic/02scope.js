// let / const
// -> braces & blocked scope
// -> doesn't add itself to the window object.

// var
// -> it is function scoped 
// -> it adds in the window object.

var c = 300
let a = 300
if(true){
    var c = 30; // we can modify the outer variable from inside
    console.log(c)
}
console.log(c) // 300
function chai(){
    console.log(this);
}

chai()
const fun = ()=>{
    console.log(this) // empty object
}
fun()
// chai()

// arrow function ----->

// const addtwo = (n1, n2) => { // if curly braces are used have to write return
//     return n1 + n2
// }
// const addTwo = (n1, n2) => n1 + n2 // no {} no return require
// const add2  = (n1, n2) => (n1 + n2) // same as above
// const add_2 = (n1, n1) => ({username: "Ishmeet"}); // in object have to use paranthisis
// console.table([addTwo(1,4), add2(1,5)])



// in global scope in node environment 
// 'this' points to the empty object

// in browser this points to window object

// scope is different in node and browser