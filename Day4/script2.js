let students = [{
        name : "Amit",
        city : "Delhi",
        CGPA : 7.5,
},
{
    name : "Rahul",
    city : "Ghaziabad",
    CGPA : 9.8,
},
{
    name : "Prateek",
    city : "Mumbai",
    CGPA : 9.8,
}
];
console.table(students);

for (let i=0; i<students.length ; i++ ){
    if(students[i].CGPA>9.0){
        console.log (students[i]);
    }
} 