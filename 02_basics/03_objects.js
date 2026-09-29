//singleton

// object lieterals
const mySym = Symbol("key 1")

const JsUser ={
    name : "akash",
    [mySym] : "my key 1", // if we dont brackets here mysym will be treated as string not as a symbol
    "vill name" : "balabigha",
    age : 22,
    location : "patna",
    isLogedIn: false
    ,lastLoginDays: ["monday" , "tuesday"],
}

// console.log(JsUser.name)
// console.log(JsUser["name"])

// console.log(JsUser."vill name")// this will give error
// console.log(JsUser["vill name"])

JsUser.name = "akash bhaskar"
// Object.freeze(JsUser)

// JsUser.name= "dfsfas"

// console.log(JsUser)

JsUser.greetings = function(){
    console.log("jello js user")
}
JsUser.greetingstwo = function (){
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greetings())
console.log(JsUser.greetingstwo())