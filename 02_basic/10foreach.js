const coding = ['js', 'rb', 'c', "c++", 'rs']

coding.forEach((element, index, arr) => {
    // console.log(element, index, arr)
});

const values = coding.forEach( (item) =>{
    // console.log(item);
    return item; // forEach don't return anything.
})

console.log(values) // undefined