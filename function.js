const passingMarks =50;

const students = [
    { name: 'anu', marks: 80 },
    { name: 'teju', marks: 65 },
    { name: 'prasanthi', marks: 50 },
    { name: 'sandhya', marks: 70 },];

    function managestudentGrade(students) {
        const passedstudent = students.filter(student => student.marks >= passingMarks);
        passedstudent.forEach(student => {
             const shortName = student.name.slice(0, 4).toUpperCase();
               const G= student.name.toUpperCase().includes("A");
               let grade;
               if (student.marks >= 75) {
                     grade = "A";
                } else if (student.marks >= 60) {
                        grade = "B";
                } else {
                        grade = "C";
                }
                console.log(` Name: ${shortName}, Marks: ${student.marks}, Grade: ${grade}, Has A in name: ${G} `);
                });
    }

    
managestudentGrade(students);