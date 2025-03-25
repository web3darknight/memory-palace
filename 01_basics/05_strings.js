const name= "mayur"
const repoCount = "50"

//console.log ( name + repoCount + "Value") // not a good way to write code, instead write

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // this is known as string interpolation

//anotherway to declare string//

const gameName = new String ('hitesh-hc');

console.log(gameName[0]); // since we know the console in chrome showing hitshhc is a key value pair, we try to access 0th key//
console.log(gameName.__proto_); // also in the console you can see a lot of functions in prototype section, every f denotes a function 

console.log(gameName.length)
console.log(gameName.toUpperCase()); // # this wont change the original string value since it is string which is a primitive data type and hence gives a copy of the original value and does not change the original value//
console.log(gameName.charAt(2)) // charat means character at which position
console.log(gameName.indexOf('t'))// this means at which position index is present

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    mayur   "
console.log(newStringOne)
console.log(newStringOne.trim())  // #the more you get familiar with strings the better it will be in front end / back end

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))