const coding = ["pyhton", "js", "c++","java" ]

// coding.forEach((value)=>console.log(value))


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(function fn(value){
//     console.log(value)}
// )

// coding.forEach(printMe)



// coding.forEach((item, index, arr)=>{
//     console.log(item + "   " + index);
// })


const myCoding = [
    {
        languagename : "javascript",
        languageFileName: "js"
    },
     {
        languagename : "java",
        languageFileName: "java"
    },
     {
        languagename : "python",
        languageFileName: "py"
    },
     {
        languagename : "kotlin",
        languageFileName: "kt"
    },

]

myCoding.forEach( (item)=>{
    console.log(item.languagename + " " + item.languageFileName)
})



