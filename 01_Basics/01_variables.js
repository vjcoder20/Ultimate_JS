const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //we can define the variable without any keyword but not a good practice
let accountState;    //If we are not initializing any value then the result would be undefined

// accountId = 2 // not allowed because we can't change the values of constant


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Imp - ***Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])