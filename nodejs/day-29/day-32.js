const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');

// States of promise
// resolve
// pending
// reject

// callback
// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err) return console.log('Error detected in the code');

//     console.log('File conetent is:',data);
// });

// Promise version
const readFilePromise=(file) =>{
    return new Promise((resolve,rejects)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
           if(err) rejects(err);
           else resolve(data);
        });
    });
};

// readFilePromise('test.txt')
//   .then(data => console.log('File read successfully', data))
//   .catch(err => console.error(err));

//   Async/await
const readAsync = async() =>{
    try{
    const data=await readFilePromise('test.txt');
    console.log('File content with asynch/await:',data);
    }catch(error){
        console.log('error in reading the file');
    }
};

readAsync();


// Create a promise to handle - name as a parameter and send a hello message with the name included, call the promise using async/await