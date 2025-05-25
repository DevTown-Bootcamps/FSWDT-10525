// Array
// let fruit=["apple","banana","cherry"];
// let num=[1,2,3,4,5];
// let mix=["apple",1,2,"banana"];


// push-add element to end of the array
// fruit.push("mango");
// console.log(fruit);

// pop-take out element
// console.log(fruit.pop());

// unshift()-add the value to the begineing of the array
// fruit.unshift('pineapple');
// console.log(fruit);

// shift()-remove element from front
// console.log(fruit.shift());
// console.log(fruit);

// indexOf-used to find the position or index of a element in the array
// console.log(fruit.indexOf('apple'));

// includes()-to check if Element exist
// console.log(fruit.includes('apple'));

// slice(start,end)-returns part of an array
// console.log(num.slice(1,3));

// for(let i=0;i<num.length;i++){
//     num[i]+=1;
// }
// console.log(num);

// String
// A N S H U L
// 0 1 2 3 4 5

let name="Anshul";
console.log(name);

// .charAt(index)-this extracts out chraracters from the string
console.log(name.charAt(2));

for(let i=0;i<name.length;i++){
    console.log(name.charAt(i));
}

// uppercase
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('n'));
console.log(name.includes('k'));
console.log(name.slice(1,4));
console.log(name.substring(1,4));
console.log(name.substr(0,4));

// trim-delte some element(sapce)-from starting and ending
let a=" Anshul Ojha  "
console.log(a.trim());

// split-used to split each word in a string
let b="used to split each word in a string";
console.log(b.split(" "));

// concate-Add to or more string together
let firstname="Anshul";
let lastname="Ojha";

let total=firstname+" "+lastname;

console.log(total);

// repeat(n)-
console.log(name.repeat(3));