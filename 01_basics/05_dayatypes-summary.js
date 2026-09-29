// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail = "ab@gmail.com"
let phoneNO ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 3342342342342342342342324234n


//Refernces (Non primitive)

// Array , objects , functions

const heros = ["akash" , "shaktiman", "naagraj"];

let myObj ={
    name: "akash",
    age: 25
}

const myfunction = function(){
    console.log("hello world");
}

myfunction()


//------------------------------------------------------

// stack (primitive). , heap (non -primitive)

let myYoutubename = "akash_bhaskar"
let anotherName = myYoutubename
 anotherName= "xyz"
console.log(myYoutubename)
console.log(anotherName)


let userOne ={
    name : "akash" ,
    id : 1
}

let userTwo = userOne

userTwo.id =10;

console.log(userOne)


console.log(userTwo)