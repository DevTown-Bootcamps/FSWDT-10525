// Comparative operators
// let a=10;
// let b=20;

// loose equality
// console.log(a==b);
// Strict equalities
// console.log(a===b);
// let c="10";
// console.log(a==c);
// console.log(a===c);

// console.log(a != b);
// console.log(a !== b);

// console.log(a > 10);
// console.log(a<b);
// console.log(a<=10);
// console.log(a>=10);


// Logical operators-combines one or two comparative operators.
//  console.log(a<b && b<25);
//  AND OPERATOR
//  TRUE+TRUE=TRUE
//  FALSE+TRUE=FALSE
//  FALSE+FLASE=FALSE
//  TRUE+FALSE=FALSE

// console.log(a>b || b>25);
//  OR OPERATOR
//  TRUE+TRUE=TRUE
//  FALSE+TRUE=TRUE
//  FALSE+FLASE=FALSE
//  TRUE+FALSE=TRUE

// String Operation
// let firstname="Anshul"
// let lastname="ojha"

// let fullname= firstname + " " + lastname;
// console.log(fullname);

// Ternary operator

// create two variables, assign then value one should be number another should be your string number, try implementing two shorthand assignment operator, try implementing comparison between both values-loos and strict comparison

// Conditional Logic
let c=25;


// Simple if condition
// if(c<25){
//     console.log("hello the value is true");
// }

// if-else condition
// if(c>25){
//     console.log("yes c is less");
// }else{
//     console.log('yes C is more');
// }


// I want to create a case where my code sould check wich value is highest
// if(a>b){
//     console.log("a is bigger value");
// }else{
//     console.log("b is bigger value");
// }

// if...else if..else ladder
// let marks=90;

// if(marks>=90){
//     console.log("A");
// } else if(marks >=75){
//     console.log("B");
// } else if(marks >=50){
//     console.log("C");
// } else{
//     console.log("D");
// }

// Nested if statements
// let age=18;
// let subscribe=true;


// if(age>18){
//     if(subscribe){
//         console.log("you are allowed");
//     }else {
//         console.log("you are not allowed");
//     }
// }else {
//     console.log("you are not allowed");
// }

// let a=12;
// let b=30;

// if a is bigger than b then perform a/b;
// if your a is lesser than b the perform b/a;
// show the result in both cases


// let ab=true;
// if(age>=18){
//     if(ab){
//         console.log("yes"); 
//     }else{
//        console.log("no");
//     }
// }

// Ternary operators-combination of if else statement
// (conditon)? "result 1" :" result 2"
// Short form of if...else statement
let a=20;
// let result= (a<15) ? a=a/3 : a=a+2;
// console.log(result);

let b=false;
// let res=(!b) ? "yes" : "no";
// console.log(res);

// if(a>=18 && b){
//     console.log("You can drive");
// }else{
//     console.log("You cannot drive");
// }

// let a,b,c you have use if..else and tell me which of these is biggest Number.


// Switch-multiple if else-to remove we switch cases
let cond=20;
// switch(cond){
//     case 30:
//         console.log(30);
//         break;
//     case 20:
//         console.log(20);
//         break;
//     case 10:
//         console.log(10);
//         break;
//     default:
//         console.log("None of your staements are true");

// }

// switch(cond>18){
//     case true:
//         console.log("you can drive");
//         break;
//     case false:
//         console.log('you are eligible to drive');
//         break;
//     default:
//         console.log("you can do nothing");
// }

// grade system
// let grade="G"

// switch(grade){
//     case "A":
//         console.log("Execllent");
//         break;
//     case "B":
//         console.log("Good job");
//         break;
//     case "C":
//         console.log("Well done");
//         break;
//     case "D":
//         console.log("You passed");
//         break;
//     default:
//         console.log("I do not know what to tell about you grade");
// }

// let day=3;
// 1-Moday
// 2-tuesday
// 3-wednesday
// implement swirch case to tell what day of week it is

// Fall through case-if you miss any break

let s="red";

switch(s){
    case "red":
    case "blue":
    case "green":
        console.log("Its good color");
    default:
        console.log("default");

}
