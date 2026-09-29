//var c = 300

let a = 300
if(true){
    let a = 30
    const b = 20
    console.log("Inner: ",a)


}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "akash"

    function two(){
        const website = "google.com"
        console.log(username)

    }
    // console.log(website) ousdie the scope of two
    two()
}

one()


if(true){
    const username = "akash"
    if(username==="akash"){
          const website = "google.com"
          console.log(username + "visting " +website)
    }
    // console.log(website)
}

// console.log(username)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let e =40
if(true){
    let e
    console.log(e)
   e=100
    console.log(e)
    // let e=50
    // console.log(e)
}

console.log(e)


console.log(addOne(5))
function addOne(num){
    return num+1
}


// console.log(addTwo(5)) this will give error because the stack the execution first takes the variable --- but in the above case funtion is stored in the execution stack === hoisting
let addTwo = function (num){
    return num+2
}

console.log(addTwo(5))


