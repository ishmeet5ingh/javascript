// ******************* Numbers

const score = 400;
const balance  = new Number(10090.1);
console.log(typeof balance);

console.log(balance)
console.log(balance.toString().length) // find the number of digit
console.log(balance.toFixed(5)); // 5 digits after '.'

const otherNumber = 239.8966

console.log(otherNumber.toPrecision(10)) // precision count from the begining

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')) // indian standards
console.log(Number.MIN_VALUE)


// *********************** Math *************

// console.log(Math)
// console.log(Math.abs(-4)) // rm -
// console.log(Math.round(4.3)) // round off
console.log(Math.ceil(4.1)) // ceiling value of a n
// console.log(Math.floor(3.5)) // floor value
// console.log(Math.sqrt(5))
// console.log(Math.min(1, 4))
// console.log(Math.max(1, 5))

// console.log(Math.random());
// console.log(Math.floor((Math.random()* 10) + 1));
const min = 10;
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

