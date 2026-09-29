// for of

const arr = [1, 2, 3, 4, 5]

// for (const num of arr ){
//     console.log(num)
// }

const greetings = "hello world"

// for(const greet of greetings){
//     console.log(greet)
// }

const map = new Map()

map.set('IN', "India")
map.set('usa', "united state of america")

for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key , value);
}

// console.log(map)


