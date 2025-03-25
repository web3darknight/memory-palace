const score = 400
console.log(score)

const balance = new Number (100)
console.log(balance)

console.log(balance.toString().length); // now balance being a number will become string and .length property will give it value 3//
console.log(balance.toFixed(2)); // helps specially when building ecommerce websites

//const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3)) // since 3 digits where mentioned the value is 23.9 from 23.8966
//const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4)) // here the precision value is declared to 4, hence 123.8966 becomes 123.9
const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3)) // this will consider only first 3 number the rest will be given as exponential as 1.12e+3

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); this will make the value 1,000,000 which is US based
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++ Maths +++++++++++++++++++++//
 // Maths as a subject / library comes default with javascript//

 //console.log(Math);
// console.log(Math.abs(-4));
//console.log(Math.round(4.3)); 
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.9));
//console.log(Math.min(4,2,3));
//console.log(Math.max(4,3,4,4));

console.log(Math.random()) // the value would always be between 1 and 0
console.log(Math.random()*10) // what if we multiply the value with 10 , the value would shift 1 decimal
// but the value can still be 0 if initial value is 0.01 so to eliminate that you add 1
console.log(Math.floor(Math.random()*10) + 1) // now we know for sure that bodmas will be followed and value wont be 0 anymore.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min)


