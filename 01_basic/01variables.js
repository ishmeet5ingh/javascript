const accountId = 1432323
let accountEmail = "hitesh@google.com"
var accountPassword = "12222"
accountCity = "Jaipur" // we can also do this in js 
let accountState

// initially js don't use block scope 

/* 
    prefer not to use var
    because of issue in block scope

*/

accountEmail = "hc@hc.com"
accountPassword = "2323232"
accountCity = "benguluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])