const name = "hitesh"
//or
const gameName = new String("hiteshhc"); // object of string

// console.log(typeof gameName); //object
// console.log(typeof name) // string
// console.log(gameName[0])
// console.log(name[0])
// console.log(gameName.toUpperCase())
// console.log(name.toUpperCase())
const repocount = 50;

//string interpolation
// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

//methods of string
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('t'))
const newString = gameName.substring(1, 3) // can't take -values include first exclude second
const newString2 = gameName.slice(1, -1) // +ve values same as above but -ve +ve
console.log(newString)
console.log(newString2)


const newStringOne = "      hitesh      c   "
// console.log(newStringOne)
// console.log(newStringOne.trim()) // remove starting and end spaces

const url = "https:/hitesh.com/hitesh%20choudhary";

// console.log(url.replace('%20', '_'))
// console.log(url.includes('hitesh'))

console.log(url.split('/'))// spliting by '/' this