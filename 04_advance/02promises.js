// /* 
//     A promise is in one of these states:
//     -> pending: initail state, neither fulfilled nor rejected.
//     -> fulfilled: meaining that the operation was completed successful.
//     -> rejected: meaning that the opearation failed.
// */

// /*
//     A promise is an object representing the eventual completion or failure
//     of asynchorous operation.
// */


// // promise created
const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete') // 1st this print
        resolve(); // then this.
    }, 1000);
})

// // consume ->

// // then() connected with the resolve
// promiseOne.then((/*callback*/ )=>{
//     console.log("promise consumed")
// })

// // // ---------------promise 2------------------>

// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Async task 2")
//         resolve()
//     }, 2000);
// }).then(()=>{
//     console.log("promise 2 consumed")
// })


// // // ------------------promise 3--------------->

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: "Ishmeet", email: "ishmeet@gmail.com"})
//     }, 3000);
// })

// promiseThree.then((user)=>{
//     console.log(user.email)
// })

// // // ----------------promise 4------------------->

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: "ishmeet", password: "123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 4000);
// })


// // promise chaining----> jitne chahe utne .then()
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log("The promise is either resolved or rejected"))
// // finally executed everytime (resolve or rejected)

// // // chaining ----> jo uper wale .then() se value return 
// //                 // hoker aayegi vohi new chain me aayegi

// // // Data Base connection me useful hai

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: "javascript", password: "124"})
//         }else{
//             reject("ERROR: JS went wrong")
//         }
//     }, 5000);
// })
// // // promise happens in future (async code)

// // // to handle a promise we have to ways then().catch / async await

// async function consumePromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response)
//    } catch (error) {
//     console.log(error)
//    }

// }

// consumePromiseFive()

// // // api call (github api)

// // const apiCallGithub = async ()=>{
// const getAllUser = async()=>{
//     try{
//         const response = await fetch('https://api.github.com/users/ishmeet5ingh')
//         const data = await response.json();
//         console.log(data)
//         // console.log(response.ok)
//     }catch(error){
//         console.log('Error: ', error);
//     }
// }

// getAllUser()

// // doing same thing in .then().catch()

fetch('https://api.github.com/users/ishmeet5ingh/followers')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

// practice promise

const promiseSix = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let err = false
        if(!err){
            resolve({username: "ishmeet", rollno: "21BCA048"})
        }else{
            reject("Something went wrong")
        }
    }, 6000)
})

promiseSix
.then((user)=>{
    console.log(user)
    return user.rollno
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(`Error : ${error}`)
}).finally(()=>{
    console.log("default")
})






