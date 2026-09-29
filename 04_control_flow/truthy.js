const useremail = "akashbhaskar@xyz"

if(useremail){
    console.log("got the user email")

}else{
    console.log("dont have the email")
}

// false values 
// false , 0 , -0 , BigInt 0n, "" , null ,undefined , Nan

// truthy values
// "0" , 'false' , " " , [] , {} function(){}

if(useremail.length === 0){
    console.log("array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}

//nulish coaleshing operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = undefined ?? null?? 110 ?? 10

console.log(val1)

// terniary operator

//condition ? true : false

const iceTeaPrice =200

iceTeaPrice <=80 ? console.log("less than 80. ") : console.log("more than 80")