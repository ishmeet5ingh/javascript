// immediately invoked function Expressiton (IIFE)
// sometimes we got issues with the global scope polution
// so usko hatane ke liye humne iife ka use kiya.


(function chai(){ // named IIFE
    console.log(`DB connected`)
})(); // we have to write this semi colom to execute the next iife

//syntax
// (/*function*/)()

(function chai(){
 console.log("hello")
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("ishmeet");


// real time example
(function() {
    let counter = 0;
  
    function incrementCounter() {
      counter++;
      console.log(`Counter: ${counter}`);
    }
  
    setInterval(incrementCounter, 1000);
  })(); 
  