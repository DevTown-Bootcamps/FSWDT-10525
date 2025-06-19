// Event
// const event=require('events');
// const fs=require('fs');

// const myEmitter=new event.EventEmitter();

// myEmitter.on('fileDone', ()=>{
//   console.log("File has been read successfully");
// });

// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err) return console.log("Error reading this file");
//     console.log('File content :', data);
//     myEmitter.emit('fileDone');
// });

// fs.writeFile('test.txt','I am writing inside my file',err=>{
//     if(err) throw err;
//     console.log('File Written');
// });

// Create a event on file write

// npm --version

// Creation of server
// const http=require('http');

// http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("Home Page");
//     }else if(req.url==='/about'){
//         res.end('About Page');
//     }else{
//         res.end('Page is not found');
//     }
// }).listen(3000,()=>{
//     console.log('Server is running on http://localhost:3000');
// })

// Create a server port:8080 url: http://localhost:8080, create three routes-'/', '/about','/contact'


// Express js framework
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Welcome to the home page");
});

app.get("/about",(req,res)=>{
    res.send("About page");
});

app.get('/contact',(req,res)=>{
    res.send("contact page");
});

app.listen(3000, ()=>{ console.log("Server is running at port 3000")});

