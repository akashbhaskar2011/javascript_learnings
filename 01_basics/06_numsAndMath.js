const score = 600
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//----------------------------------------------------------------------

console.log(Math);
console.log(Math.abs(-11));
console.log(Math.round(4.6));
console.log(Math.ceil(9.3));
console.log(Math.floor(1.9));
console.log(Math.min(2,3,4,5,-9));
console.log(Math.max(9,0,98));

console.log(Math.round((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min +1)+min))
