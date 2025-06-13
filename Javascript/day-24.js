// function out(){
//     let a=30;

//     function inner() {
//         console.log("a :"+a);
//     }

//     return inner;
// }

// const b=out();
// b();


function counter(){
    let count=0;

    return function(){
        count++;
        console.log("Count:", count);
    };
}

const incre=counter();
incre();
incre();