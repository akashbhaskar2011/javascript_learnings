const user= {
    username : "akash",
    price: 100,

    welcomeMessage:function(){
        console.log(`${this.username} , welcom to website`)
        console.log(this )
    },


}

// user.welcomeMessage()
// user.username = "bhaskar"
// user.welcomeMessage()

// console.log(this )


// function chai(){
//     let username = "akash"
//     console.log(this.username); // cant this cant be used within function to access username , but if it was an object then it would have worked
//     console.log(username);
// }
// // chai()

const chai1 = function(){
    let username = "akash"
     console.log(username);
}

//if funtion is stoes in some varibles then it can be called directly by using () after the fucniton declartions

// chai1()

const chai2 = ()=>{
    let username = "akash"
     console.log(username);
}

// chai2()

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }


// const addTwo = (num1, num2) => num1+num2

const addTwo = (num1, num2) => ( num1 + num2)
//if curly brackets used we need to user return , if parenthesis() no need to use return , or implicit no need to use return

// console.log(addTwo(2,3))



