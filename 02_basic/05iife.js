// immediately invoked function Expressiton (IIFE)
// sometimes we got issues with the global scope polution
// so usko hatane ke liye humne iife ka use kiya.


(function chai(){ // named IIFE
    console.log(`DB connected`)
})(); // we have to write this semi colom.

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("ishmeet")



