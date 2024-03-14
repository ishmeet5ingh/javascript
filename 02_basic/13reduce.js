const array1 = [1, 3, 5, 6];

const initialvalue = 0;

// -> have to give initialvalue from where we need to start.
// -> accomulate values of array in one variable

const sumWithInitial = array1.reduce((accumulator, currval) =>{
    console.log(accumulator)
    return accumulator + currval // currval adds in the accumulator
}, initialvalue) 

console.log(sumWithInitial);

// shopping cart calculation