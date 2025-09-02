let Marks=60;
let grade;
if (Marks>=90 && Marks<=100) {
    grade="A";
}
else if (Marks>=75 && Marks<=89) {
    grade="B";
}
else if (Marks>=50 && Marks<=74) {
    grade="C";
}
else if (Marks>=0 && Marks<=50) {
    grade="failed";
}
else {
    grade="Invalid Marks";
}
console.log("grade:", grade);
console.log("Marks:", Marks);
