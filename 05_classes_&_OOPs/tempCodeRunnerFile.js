for(let [key, value] of Object.entries(course)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
}
