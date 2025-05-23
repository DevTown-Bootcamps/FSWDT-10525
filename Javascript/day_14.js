// *
// **
// ***
// ****
// *****

// for(let i=0;i<5;i++){
//     let patter="";
//     for(let j=0;j<=i;j++){
//         patter+="*";
//     }
//     console.log(patter);
// }

// a[]={1,2,3,4,5,6,7,8,9,10};
// computer sum of all even numbers
// let a=9;
// if(a%2==0){
//   console.log("Yes it is even");
// }else{
//     console.log("It is not even");
// }

// for..in loop
// let detail={name:"Anshul",age:30,city:"delhi"};
// for(let i in detail){
//     console.log(detail[i]);
// }

// .forEach() 
// we cannot add any break statement
// let fruit=["Apple","Cherry","Banana"];
// fruit.forEach((i,index) => {
//     console.log(i);
// });

// .map() funtion
// fruit.map((i,index)=>{
//     console.log(i);
// })
// map can also be used for array transformation
// let a=[1,2,3,4]
// let square=a.map(a=>a*a);
// console.log(square);

// .filter-used to implement filtering of array by using any condition
// let a=[1,2,3,4,5,6,7,8,9,10];
// let even=a.filter(a=>a%2===0);
// console.log(even);

// .reduce()
// let a=[1,2,3,4,5];
// let sum=a.reduce((total,current)=> total+current,0);
// console.log(sum);



// Print all numbers between 1 to 50 that are divisible by 5;
for(let i=1;i<=50;i++){
    if(i%5===0){
        console.log(i);
    }
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
    let a = " ";
    for (let j = 1; j <= i; j++) {
        a+= i;
    }
    console.log(a);
}
