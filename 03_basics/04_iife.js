// immediately invocked funtion expressiosn (IIEFS)
// global pollution se bachne k liye use hota h 

(function chai(){
    console.log("db connected")
})();

//this is named iife
// in this case we must use ; semicolon to make the machine know that here the code stops
( () => {
    console.log("db connected")
})();

( (name) => {
    console.log("db connected to " +name)
})("asksh");

//this is simple iifee