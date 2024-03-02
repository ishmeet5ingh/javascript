// Dates
let mydate = new Date
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString()) // fri feb 23 2024
// console.log(mydate.toLocaleDateString()) // 23/02/2024
// console.log(typeof mydate) //object

// let myCreatedDate = new Date(2023, 0, 24);//months starts from 0 in js
let myCreatedDate = new Date("01-14-2090");//
// console.log(myCreatedDate.toDateString()); //modified date

// let myTimeStamp = Date.now()

// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

// const timestamp = Date.now();
// const currentDate = new Date(timestamp);
// console.log(currentDate.getMonth()+1)

let newDate = new Date();

newDate.toLocaleDateString('default',{
    weekday: "long",
})