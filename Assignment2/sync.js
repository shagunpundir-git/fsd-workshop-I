//import
const fs = require("fs");
//create
fs.writeFileSync("student.txt"," Name : Rahul \nRoll Number: 101");
console.log("done");
//read
const data = fs.readFileSync("student.txt","utf8");
console.log(data);
//append
fs.appendFileSync("student.txt", "\nMarks : 85\nAttendance : 92%");

