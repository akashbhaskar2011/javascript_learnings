let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) 
console.log(typeof valueInNumber)// can give number as output even when the output is not a number (nan) | but if the no that is being converted is null it will give 0


// "33" --> 33
// "33anv" --> Nan
// true --> 1 , false --> 0


let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 --> true , 0 --> fasle
// "" -> false
// "akash" --> true

let number = 33

let stringNUmber = String(number)

console.log(stringNUmber)
console.log(typeof stringNUmber)



let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(3%2)

str1 = "akash"
str2 = "bhaskar"

console.log(str1+ " " +str2)

console.log( "1" + 2);
console.log(1 + "3")
console.log("1" + 2 + 2)
console.log(1+ 2 + "3")

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 =num3 =2+2