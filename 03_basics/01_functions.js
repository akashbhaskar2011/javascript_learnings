

function sayMyName(){
    console.log("akash")
}

sayMyName //refernce
sayMyName()//execute

function sum(a , b){
    // ans = a +b
    // return ans
    return a+b
}

let result = sum(22 , -.1)
// console.log(result)

function loginUserMessage(username = "akash"){
    if(username === undefined){
        console.log("please enter username")
        return
    }
    return `${username} juse logged in`

}

// console.log(loginUserMessage("bhaskar"))


function calculateCsrtPrice(...num1){
    return num1
}
 //rest operator and spread use define its name

 console.log(calculateCsrtPrice(2,3,44,545))


 function calculateCsrtPrice2(val1, val2, ...num1){
    return num1
}
 //rest operator and spread use define its name

 console.log(calculateCsrtPrice2(2,3,44,545))


 const user ={
    username: "akash",
    price:199
 }

 function handleObject(anyObject){
    console.log(`usernmaw is ${anyObject.username}`)
 }

 handleObject(user)


 const myAray = [1,0.3,2,3,4,555]

 function returnSecondValue(getArray){
    return getArray[1]
 }