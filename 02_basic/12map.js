const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// perform opertion on each element 
//  const newNums = myNums.map((num)=> num + 10)
// console.log(newNums);
// console.log(myNums);
// create new array

const newNums2 = myNums // chaining
                .map((num)=> num * 10)
                .map((num)=> num + 2)
                .filter((num)=> num > 15)

console.log(newNums2)


