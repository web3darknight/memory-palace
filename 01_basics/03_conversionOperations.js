let score = null //"33". "33abc"//

console.log(typeof score);
console.log(typeof (score)); // both methods are valid//

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // type is shown as number in terminal//
console.log(valueInNumber) // the score="33abc" got converted to number when written as Number(score) hence output type is number 
                           // however when its actual value was to be printed it showed NaN not a number ,
                           //  since it 33abc is not a number 33 is !

//"33"=>33
//"33abc"=> NaN
// true=>1; false=> 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn) //In computing and logic, "Boolean" refers to a data type or system that can only have one of two possible values: true or false, often represented as 1 or 0.
                                            //  This is named after the mathematician George Boole, who developed Boolean algebra.
console.log(booleanIsLoggedIn);

//1 => true, 0=> false
//"" => false
// "mayur" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);
 