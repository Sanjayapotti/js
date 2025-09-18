class student {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`${this.name}is ${this.age} years old.`);
}
}
class primarystudent extends student {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
}
}
const student1 = new primarystudent("sanju", 24, "A");
student1.introduce();
student1.study();
const student2 = new primarystudent("praveen", 28, "A");
student2.introduce();
student2.study();
const student3 = new primarystudent("satish", 27, "A");
student3.introduce();
student3.study();