// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   // object datatype

// let myCreatedDate = new Date(2023, 0, 23)  // month 0 se start hote hai js mai 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // aage ka date phir time pe chla jata hai like (year,month,date,hrs,min,sec)
// let myCreatedDate = new Date("2023-01-14")   //yyyy-mm-dd
let myCreatedDate = new Date("01-14-2023")  // mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //convert date to milisecond
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

