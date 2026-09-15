// //Program on CRUD operation on file using fs module


// //firstly import fs(File System) module in your program
const fs = require("fs");
// // create file and write some content in that file
// fs.writeFile("student.txt","hello,this file is for students",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else {
//         console.log("file successfully created");
//     }
// });
// //now reading file content
// fs.readFile("student.txt","utf-8",()=>{
//     if("err"){
//         console.log("err");
//     }
//     else 
//     {
//         console.log("content of file ");
//         console.log(data);
//     }
// });
// fs.appendFile("student.txt"," file of cse 3rd sem",(err)=>{
// if(err) throw err

// else{
//     console.log("file successfully updated");
// }
// });
fs.unlink("student.txt",(err)=>{
if(err) throw err
else {
    console.log("file deleted");
}
});