// const promise=new Promise((resolve,reject)=>{

// })

// promise
// .then(result=> console.log("Success",result))
// .catch(error=> console.log("Error"))
// .finally(()=> console.log("Done!"));

// const myPromise= new Promise((resolve,reject)=>{
//     let Success=true;

//     if(Success){
//         resolve("The operation was successfull");
//     }else{
//         reject("This operation failed");
//     }
// });

// myPromise
// .then(result=> {
//     console.log(result);
// })
// .catch(error=>{
//   console.log(error);
// })
// .finally(()=>{
//     console.log("Promise Completed");
// })

// const failing=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('Something went wrong');
//     },1000);
// });

// failing
// .then(result=> {
//     console.log(result);
// })
// .catch(error=>{
//   console.log(error);
// })
// .finally(()=>{
//     console.log("Promise Completed");
// });

// Promise.all([myPromise,failing])
// .then(results => console.log(results))
// .catch(err => console.error(err));


// Race 
const fast=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First One")
    },1000);
});

const slow=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second One");
    },500);
});

Promise.race([fast,slow]).then(result=> console.log("Winner :", result));