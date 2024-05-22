// array

const myArr = [0, 1, 3, 5, 6, 6];
const myArr2 = [0, 1, 3, 5, 6, 6];

// const myArr2 = new Array(1, 2, 5, 6);

// we get prototype property in array

// array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(0) //add at start
// myArr.shift() // pop at start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArray = myArr.join() // converted into string
// console.log(myArr)
// console.log(typeof newArray)
 
//slice, splice

// console.log("A ", myArr)
// console.log(myArr3)
const myArr3 = [0, 1, 3, 5, 6, 6];
const myn1 = myArr3.slice(1, 3) // not includes the 3rd index // not change the array

// console.log("myn1",myn1);
// console.log(myArr3)



//includes 3rd remove 1, 3, 5 
// console.log(myArr3)
const myn2 = myArr3.splice(1, 3)  // remove the elements from the array in a range 
console.log("myn2",myn2);
// console.log(myArr3)

// const newarray = myArr.concat(myArr2) 
// console.log(newarray)

// const all_new_heros = [...myArr, ...myArr2] //spread operator
// console.log(all_new_heros)

// const another_array = [1, 3, 5, [1, 5, 6], [1, 5, 6]]
// console.log(another_array)
// const real_another_array = another_array.flat(Infinity); // remove all inner array and make single elements of it
// console.log(real_another_array)

console.log(Array.isArray("hitesh"))

// console.log(Array.from("hitesh")) // create array of hitesh
console.log(Array.from({name: "hitesh", r: 3})) // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)) // make array from above elements




