const fs = require("fs");
 //// create file and write some content in that file
// fs.writeFile("student.txt","hello,this file is for students",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else {
//         console.log("file successfully created");
//     }
// });
//now reading file content
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
// 
fs.unlink("student.txt",(err)=>{
if(err) throw err
else {
    console.log("file deleted");
}
});