// Loop in js

// statement 1-repeate it again-loop
// FOR loop- (initilization,condition,updation);
// a++; a=a=+1;
// a=0; true; a=1;
// a=1; true; a=2;
// a=2; true; a=3;
// a=3; true; a=4;
// a=4; true; a=5;
// a=5; false; 
// Counter
// for(let a=0;a<=5;a++){
//    console.log(a);
// }

// Looping through and array
let fruit= ['apple','banana','cherry'];

for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}

// let num=[2,3,4,6,6];

// for(let i=0;i<num.length;i++){
//    num[i]+=2;
//    console.log(num[i]);
// }

// adding break in a loop
// for(let i=0;i<9;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }


// create a array of number from 0 to 10 and update each number as a[i]=a[i]*2 until the value of array is 8.

// adding break in a loop
// for(let i=0;i<9;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// Nested for loop 5*5=25
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log(i," ",j);
//     }
// }

// While loop
// initialization;
// while(condition){
//     updation;
// }

// let i=0;
// while(i<fruit.length){
//     console.log(fruit[i]);
//     i++;
// }

// let num = [2, 3, 4, 6, 6];
// let i = 0;
// while (i<=num.length) {
//     if (i == 4) {
//         break;
//     }
//     num[i] += 2;
//     console.log(num[i]);
//     i++;
// }

// do..while loop
let i=0;
do{
    console.log(i);
    i++;
}while(i<5);
