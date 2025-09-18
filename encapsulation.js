class students {
constructor(name,age,gender,phone,email,course,marks){
this.name = name;
this.age = age;
this.gender = gender;
this.phone = phone;
this.email = email;
this.course = course;
this._marks = marks;

}
getmarks = function(){
  return this._marks;
}
data() {
    console.log(this.name+ this.age+ this.gender+ this.phone+ this.email+ this.course+ this._marks)
}
}
const details = new students("sanju", 24, "female", 1236547809, "sanju.potti222@gmail.com", "UX/UI", 80);
details.data();
const details1 = new students("anu",24,"female", 2587712695,"anusha.anu234@gmail.com","python",85);
details1.data();
const details2 = new students("teju",24,"female",5632140987,"teja.t1234@gmail.com","java",82);
details2.data();