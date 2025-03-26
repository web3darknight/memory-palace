// Dates

let myDate = new Date()
   // console.log(myDate.toString())
   //  console.log(myDate.toDateString())
    //console.log(myDate.toLocaleString())  
    //console.log(typeof myDate); // .... (object)

    //let     myCreatedDate = new Date(2023, 0 ,23)
    let myCreatedDate = new Date("2023-01-14")
 // console.log(myCreatedDate.toDateString())// this gives values Mon Jan 23 2023//
 //console.log(myCreatedDate.toLocaleString()) // this gives values 1/23/2023, 5:03:00 AM//

 let myTimeStamp = Date.now() // when u design quizes, answer polls who gave fastest answer.
  //console.log(myTimeStamp) // u need miliseconds if u book a hotel, for example, then you have to compare the dates 
  //console.log(myCreatedDate.getTime()) // since date is an object u can ask it to get time\
  //console.log(Date.now())// it will come in milliseconds
  //console.log(Math.floor(Date.now()/1000)) // dividing by 1000 will convert it into seconds and math.floor gives u a round off figure

  let newDate = new Date()
  console.log(newDate);
  
  console.log(newDate.getMonth() + 1) // +1 done so that end user doesnt get confused 
  console.log(newDate.getDay()) 

  // now using these syntax / string complex date programs are run online / people practice to write in the following format if they want to write fulltime
// so they do string interpolation
 
//`${newDate.getDay()} and the time is...` //

newDate.toLocaleString('default',{
   weekday: "long"
})