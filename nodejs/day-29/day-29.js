// Local-Modules
// const math=require('./math');
// console.log(math.add(3,2));
// console.log(math.mul(2,3));


// let a=math.check(5);
// if(a){
//     console.log("The number entered is even");
// }else{
//     console.log("the number entered is odd");
// }

// Create a module to calculate square and cube of a number

// File system

const fs= require('fs');



// Writing into file
// fs.writeFileSync('test.txt','I am writing inside the file');

// fs.writeFile('test.txt','I am writing inside my file',err=>{
//     if(err) throw err;
//     console.log('File Written');
// })

// Appending to a file
fs.appendFile('test.txt',"\n Append the new text",err=>{
    if(err) throw err;
    console.log("New text has been appended");
})

// Reading the file
const data=fs.readFileSync('test.txt','utf8');
console.log(data);

// create one fileURLToPath, write inside the file using writeFile , then append inside that file and read the file.