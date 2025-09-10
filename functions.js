const passingMarks = 50;
const students = [
    {Name: "Anusha", marks:95},
    {Name:"Teju", marks:96},
    {Name:"Latha", marks:90},
    {Name:"Puja", marks:30}
];
function studentGrade(students) {
        const passedstudent = students.filter(student => student.marks >= passingMarks);
        passedstudent.forEach(student => {
             const shortName = student.name.slice(0, 3).toUpperCase();
               const hasA= student.name.toUpperCase().includes("A");
               let grade;
               if (student.marks >= 75) {
                     grade = "A";
                } else if (student.marks >= 60) {
                        grade = "B";
                } else {
                        grade = "C";
                }
                console.log(` Name: ${shortName}, Marks: ${student.marks}, Grade: ${grade}, Has A in name: ${hasA} `);
                });
    }

    
studentGrade(students);
    




