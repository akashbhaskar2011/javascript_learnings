const mavel_heroes = ["thor", "ironman" , "spiderman"]
const dc = ["superman", "flash" , "batman"]

// mavel_heroes.push(dc)
// console.log(mavel_heroes)
// console.log(mavel_heroes[3][2])

// const allHeros = mavel_heroes.concat(dc)
// console.log(allHeros)

const all_new_heros = [...mavel_heroes, ...dc]

console.log(all_new_heros)

const arr3 = [1,2,3,[4,5,6,[3,4,5[23,43]],[2,3,4]]]

const flatArray = arr3.flat(Infinity)

console.log(flatArray)


console.log(Array.isArray("akash"))
console.log(Array.from("akash"))


console.log(Array.from({name :"akash"}))

// if not able to convert to the array it will return empty array


let score1=20
let score2=204
let score3=220

console.log(Array.of(score1,score2,score3));