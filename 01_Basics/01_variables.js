const accountId = 11793
let accountEmail = "vaibhav@google.com"
var accountPassword = "9801"
accountCity = "Jaipur"  //we can define the variable without any keyword but not a good practice
let accountState;    //If we are not initializing any value then the result would be undefined

// accountId = 32325 // not allowed because we can't change the values of constant


accountEmail = "vj@vj.com"
accountPassword = "6377356958"
accountCity = "Bengaluru"

console.log(accountId);

/*
Imp - ***Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 
// It will produce result in table format for all the variables