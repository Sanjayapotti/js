
let students = [
    { name: 'anu', marks: 80 },
    { name: 'teju', marks: 65 },
    { name: 'prasanthi', marks: 50 },
    { name: 'sandhya', marks: 70 }
];
sum=0;
average=0;
function avg(students) {
    for (let i=0;i<students.length;i++) {
        sum=sum+students[i].marks;
    average=sum/students.length;
}
console.log(average);
}
avg(students);