// Dates
let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toTimeString()) // 21:03:43 GMT+0530
console.log(mydate.toDateString()) // fri feb 23 2024
console.log(mydate.toLocaleDateString()) // 23/02/2024
console.log(mydate.toLocaleTimeString()) // 21:04:33
console.log(typeof mydate) //object

// let myCreatedDate = new Date(2023, 0, 24);//months starts from 0 in js
let myCreatedDate = new Date("01-14-2090");//
console.log(myCreatedDate.toDateString()); //modified date

let myTimeStamp = Date.now()

// The Date.now() function in JavaScript returns the current timestamp as the number of milliseconds elapsed since the Unix epoch (midnight UTC on January 1, 1970).
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))// seconds

const timestamp = Date.now(); // 
console.log(timestamp)
const currentDate = new Date(timestamp);
console.log(currentDate.getMonth()+1)

let newDate = new Date();

newDate.toLocaleDateString('default',{
    weekday: "long",
})
console.log("new data = ",newDate)

