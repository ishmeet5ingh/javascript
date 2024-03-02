const arr = [1, 2, 5, 6, 7];

for(const idx in arr){ // index
    // console.log(arr[idx])

}
for(const num of arr){ // elements
    // console.log(num)
}


// Maps => ( only unique values )

const map = new Map();


map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)

// for (const [key, value] of map) { // for of is not for object
//     // console.log(key, ":-", value)
// }
for (const key in map) { // not working
    console.log(key)
}


const myObject = {
    'game1': "NFS",
    'game1': "NFS",
    'game2': "N",
}

for(const key in myObject){ // also used in array 
    // console.log(`${key} := ${myObject[key]}`)
}

