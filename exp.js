let employee = [
    {
        id: 100,
        name: "Poonam kanojiya",
        desgination: "software developer",
        salary: "15000"
    },
    {
        id: 101,
        name: "Abhi kanojiya",
        desgination: "Team lead",
        salary: "12000"
    },
    {
        id: 102,
        name: "Chhhaya kanojiya",
        desgination: "Tech lead",
        salary: "11000"
    },
    {
        id: 103,
        name: "Kanchan kanojiya",
        desgination: "software developer",
        salary: "10000"
    }
]
//  employee.forEach((e,index)=>{
// console.log(`${index} ${e.salary}`);
// });

// itrate on element
// for(let emp of employee){
//     console.log(emp.salary)
// }

// itrate on index of the element
for(let index in employee){
    console.log(employee[index])
}
