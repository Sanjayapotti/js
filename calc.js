let name= "calculator";
runcalculator()
function runcalculator() {
    
    let NUM1=10;
    let NUM2=20;
     calculator(NUM1,NUM2, add);
      calculator(NUM1,NUM2, subtract);
       calculator(NUM1,NUM2, divide);
        calculator(NUM1,NUM2, multiply);
         calculator(NUM1,NUM2, percentage);
}
function calculator(A,B, operation) 
{
    let result=operation(A,B,);
    console.log("result:",result);
}
function add(A,B){
    return A+B;
}
function subtract(A,B){
    return A-B;
} 
function divide(A,B){
    return A/B;
}
function multiply(A,B){
    return A*B;
}
function percentage(A,B){
    return A%B;
}


// calculator(A,B, operation);