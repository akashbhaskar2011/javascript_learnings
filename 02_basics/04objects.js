const tinderUser = new Object() // objects made using the object constructir is singleton and object made with {} are normal objects

tinderUser.id=123
tinderUser.name = "akash"

// console.log(tinderUser)

const regularUser = {
    email: "xyz@gmail.com",
    fullname:{
       first_name: "akash",
       lastname: "bhaskar",
    }
}

// console.log(regularUser.fullname.first_name)

const obj1 ={1:'a',2:'b',3:'c'}
const obj2 ={4:'d',5:'e'}

const obj3 = {...obj1,...obj2}
const obj4 = {obj1,obj2}

// console.log(obj3)
// console.log(obj4)

const obj5 = Object.assign({},obj1,obj2)
// console.log(obj5)


const users =[
    {
        id:1,
        name: "xyz",
    },
    {
        id:1,
        name: "xyz",
    },
    {
        id:1,
        name: "xyz",
    },
    {
        id:1,
        name: "xyz",
    },{
        id:1,
        name: "xyz",
    }
]
// console.log(users[1].name)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name'))



const course = {
    coursname: "js in hindi",
    price: "999",
    courseInstructor: "akash"
}

// course.courseInstructor
// const {courseInstructor} = course
const {courseInstructor: instructor} = course
// console.log(courseInstructor)
// console.log(instructor)

// {
//     "name": "akash",
//     "cousename": "js in hindi",
//     "price": "free",
// }
//json structure have both the keys and values in the stringg format 


[
    {},
    {},
    {}
]

//array of objects 