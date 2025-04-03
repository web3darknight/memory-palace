//const myArr = [0, 1, 2, 3, 4]
//const myHeroes = ["batman","superman"]

const myArr2 = new Array (1, 2, 3)
const myArr3 = new Array (4,5,6)
//console.log(myArr[0]); 

// array methods

//myArr.push(6) // .push will push the element towards the end
//myArr.push(7) // . pop will eliminate the last element 

//myArr.unshift(9) // .unshift will insert the value at the start
//myArr.shift()// .shift will remover tthe first value

//console.log (myArr.includes(9));
//console.log(myArr.indexOf(3));

//const newArr = myArr.join() // this will change the array type to string and has also binded it.
// console.log(myArr);
// console.log(newArr);// new array is converted to string comma separated

// slice , splice

//     console.log("A", myArr2 );
//         const myn1 = myArr2.splice(1, 3)

//    console.log(myn1);     
//    console.log("B", myArr2);

//    console.log(myn2); 

//    const myn2 = myArr2.splice(1, 3)
//    console.log("C", myArr2 )
//    console.log(myn2);     

// const myArr4 = myArr2.join(myArr3)


const myArr4 =[...myArr2,...myArr3]
console.log(myArr4)
    
