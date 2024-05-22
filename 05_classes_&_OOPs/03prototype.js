// ---------------prototype------------------

// default js behaviour - prototypal behavior.　yaniki uper se uper js kabhi haar nahi maanti, jo hum usse expect krna　chahte hai js or uper jati hai or uper check krti hai
//　parents me bhi check krti hai jb tk ki ** null ** value na mil jaye this is prototypal behavior

// prototype is the one-->
// * gives access to new keyword
// * classes iske through
// * this bhi
// * prototypal inheritance

/*

In JavaScript, every object is linked to a prototype object from which it inherits properties and methods. This prototype-based inheritance is fundamental concept in JavaScript and is often referred to as the "prototype chain."

*/

// function ----->
// array --------> object -----------> null
// string---------|>

// object prototype is null

// no object parent present
// own properties

function multiby5(num) {
  return num * 5;
}

// function is function
// function is also object

multiby5.power = 2;

// console.log(multiby5(5))
// console.log(multiby5.power)

// console.log(multiby5.prototype)// {}
//by default kuch context set hote hai　or ye {} jo hai us method ka this hai　prototype not only methods also some internal properties

function createUser(username, score) {
  this.username = username;
  this.score = score;

}
createUser.prototype.increment = function () {
  this.score++;
  return this;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
// increment and printMe jo additional properties aayi hai vo btane ka kaam niche line me jo new keyword hai vo krta hai.

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

console.log(chai.__proto__.increment());
console.log(tea);
// console.log(chai.increment());

/*


Here's what happens behind the scenes when the　new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript　object.


A prototype is linked: the newly created object　gets linked to the prototype property of the　constructor function, this means that it has access to properties and methods defined　on the constructor's prototype.

The constructor is called: the constructor function　is called with the specified arguments and this is　bound to the newly created object. If no explicit return value is specified from the constructor, js　assumes this, the newly created object, to be intended　return value.

*/

// ******** prototype chain ----->
// arr.__proto__.__proto__.__proto__
// arr   arr.prototype   object.prototype    null
// ****image**** 01arrProto.png

//function.__proto__.__proto__.__proto__
// ****image***** 02fncProto.png

//**************************************************

// we can add the properties in main object then we can access that from any object (array, function) we are injecting that property to the main object

Object.prototype.ishmeet = () => {
  console.log(`this property is accessed by every object`);                                                                                 
}

const obj = {
  name: 'ishmeet',
  course: 'BCA',
  roll: '21BCA048'
}


const arr = [1, 3, 5, 6, 6];

Array.prototype.heyIshmeet = function(){
  console.log('hey ishmeet')
}// we cannot access this in any object only in array similarly in string and function

console.log(obj.ishmeet());
// obj.heyIs hmeet() // we can't do this because heyIshmeet property is given to the array not to the object


arr.heyIshmeet()
//***************************************************

//****************Inheritance************************
// prototypal inheritance----------->
const User = {
  name: "chai",
  email: "chai@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  inAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User
/* modern syntax-------> */ 
Object.setPrototypeOf(Teacher, User) 
console.log(Teacher.name)
console.log(User.makeVideo) // undefined


// modern syntax------------------------>
Object.setPrototypeOf(TeachingSupport, Teacher)// TeachingSupport inherit the properties of Teacher

console.log(TeachingSupport.makeVideo)

// *************************************************

// add new property to String

let anotherUsername = "ChaiAurCode            "

String.prototype.trueLength = function(){
  console.log(`${this}`) // the String on which we are appling this property.
  console.log(`True length is: ${this.length}`)
  console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh   ".trueLength()

// this tells current execution context