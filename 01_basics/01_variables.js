

// console.log(accountStatus) // this will give refernce error
console.log(accountStatus2)// if it with let it would have given the refernce error but as it is var it will give undefined but ideally it should have given the error this si why use of var is stopped 

const accountId = 1223
let accountEmail = "ak@gmail.com"
var accountPassword = "xyz"
accountCity = "patna"
let accountStatus
var accountStatus2 

// accountId =232 // const cant be reassigned 

console.log(accountId)
console.log(accountStatus) // this will give undefined as output as the variable is not assigned
console.table([accountId , accountEmail, accountPassword , accountCity] )

/*
prefer not to use var as it 
because of issue in block scope and funcitonal scope
*/