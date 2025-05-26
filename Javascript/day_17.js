// Functions-reusable code block to perform a certain task

// function functionname(parameters){
    // code block/function scope
// }

// Function example-no pramater function
// function greet(){
//     console.log("Hello");
// };

// greet();
// greet();
// greet();

// Paramter function
// function add(a,b){
//    return a+b;
   
// }

// function mul(){
//     return add(3,4)*2;
// }

// let result=add(2,4);
// console.log(result);
// console.log(add(10,2));

// function expression
// const add = function(a,b){
//    return a+b;   
// }

// console.log(add(3,4));

// Arrow function

// const add = (a,b) => {
//     return a+b;
// }

// console.log(add(3,4));

// const greet = () =>{
//     console.log("Hello");
// }

// greet();

// create a function to calculate square of a number

// Short form function
// const cube1 = (n) => {
//     return n*n*n;
// }
// const cube = (n,a) => n*n*n+a;
// console.log(cube(3,2));


// Callback function

// function greet(name,Callback){
//     console.log("Hello",name);
//     Callback();
// };

// function saybye(){
//     console.log("Goodbye");
// };

// greet("Anshul",saybye);

// default paramtere
// function greet(name="Guest"){
//     console.log("Hello",name)
// }
// Prameter list is empty
// greet(); 
// paramter value is not empty
// greet("Anshul"); 

// create a function to multiply two numbers and give it a default value , mul(); mul(2); mul(2,3);
// function mul(a = 1, b = 1) {
//   console.log(a * b);
// }
// mul();       
// mul(2);      
// mul(2, 3);

// Rest paramter-it take any number of parater for you function
// function sum(...n){
//     let sum=0;

//     for(let num of n){
//         sum+=num;
//     }
//     return sum;
// }

// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4,5,6));

// Set timeout-used to add delay in execution of function
// setTimeout(function(){
//     console.log("There is delay");
// },4000);

// scope of function
// let message="Hello I am there";
// function mess(){
//     console.log(message);
// }
// mess();
// console.log(message);



// function add(){
//   if(true){
//     var a=3;
//     let b=4;
//     const c=5;

//     console.log(a+b+c);
//   }
//   console.log(a);
// }

// add();

// function char(){
//     let name="Anshul";

//     function inner(){
//         console.log("Hello",name);
//     }
//     inner();
// }

// char();

// Closure
function counterFunc(){
    let count=0;

    return function(){
        count++;
        return count;
    };
}

const counter1=counterFunc();
console.log(counter1());
console.log(counter1());
console.log(counter1());

