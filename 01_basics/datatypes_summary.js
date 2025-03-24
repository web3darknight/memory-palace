// Primitive

// 7 types: String, Number, Boolean, null , undefined, symbol, BigInt
const score= 100
const scoreValue =100.3

const IsLoggedIn = false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

//const bigNumber = 3434343434343433232323232232323434343434n
//Reference (Non primitive)

// Array, Objects ,Functions

const heros = ["shaktiman","naagraj","doga"]// arrays are kept in square brackets
let myObj = {
    name:"mayur",
    age:22,
    
}// objects are kept in curly bracket {data type can be anything whether string, number boolean function array it can be a differebt object also } 
// u can also store it in variable by saying let myObj{ name:"mayur" age:22}

//function can be declared in many ways for now we will declare as variable//
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);