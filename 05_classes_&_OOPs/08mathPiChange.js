const descripter = Object.getOwnPropertyDescriptor(Math, "ceil")
// console.log(descripter)


// console.log(descripter)
// Math.PI = 5
// console.log(Math.PI)

const chai = {
    name: 'ginger chai',
    price: 140, 
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi bni");
    }
}
 
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, 'price', { // only on the price property
    // writable: false,
    enumerable: false, // In JavaScript, an enumerable is a property attribute that determines whether a property can be iterated over using a for...in loop. Objects in JavaScript can have properties, and these properties can have attributes. One of these attributes is the enumerability.
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        // console.log(`${key} : ${value}`) 
    }
    // console.log(`${key} : ${value}`) // condition se bhar method bhi print ho jayaga as it is. jaisa likha hai code me.
}

const course = {
    name: "js",
    price: 5000,
    duration: "5 h",
    renew: function(){
        console.log(`renew the ${this.name} course`)
    }
}

const des = Object.getOwnPropertyDescriptor(course, "duration");
//'Object.defineProperty()' is a method in JavaScript that allows you to add a new property or modify an existing property on an object with more control over its behavior. This method provides fine-grained control over various property attributes, such as enumerability, writability, and configurability.


// console.log(des)

for(let [key, value] of Object.entries(course)){
    Object.defineProperty(course, key,{
        writable: false
    })
    console.log(`${key} : ${value}`)
}

for(let [key, value] of Object.entries(course)){
    
    const des = Object.getOwnPropertyDescriptor(course, key);
    console.log(des)
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
}


