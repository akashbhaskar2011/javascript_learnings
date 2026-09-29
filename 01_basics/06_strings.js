const name = "akash"
const age = 25

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String('gta san and reas')


console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(name.length)

console.log(gameName.charAt(1))
console.log(gameName.indexOf('g'))
console.log(gameName.substring(0,1))

const anotherString = gameName.slice(-8 ,4 )
console.log(anotherString)

const newStringOne ="   akash "

console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://akash%39bhaskar.com"

console.log(url.replace('%39' ,"-"))

console.log(gameName.split(' '))