class students {
    #marks;
    constructor(name, marks){
        this.name = name;
        this.#marks = marks;
    }
   getmarks=function(){ 
    return this.#marks;
   }
   updatemarks(newmarks){
    if (newmarks>=0 && newmarks <=100){
        this.#marks = newmarks;
    }
    else{
        console.log("invalid marks.must be between 0 and 100.");
    }
   }
  displayinfo(){
    console.log(`name: ${this.name}, marks: ${this.#marks}`);
  }
}
const data = new students ("Anusha",85);
data.displayinfo();
data.updatemarks(93);
console.log(`updated marks:${(data.getmarks())}`);