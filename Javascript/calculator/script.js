const display=document.getElementById("display");
const button=document.querySelectorAll("button");

button.forEach(button =>{
    button.addEventListener("click",() =>{
        const value=button.textContent;

        if(value==="C"){
            display.value='';
        }else if(value === '='){
            try{
              display.value= eval(display.value);
            }catch{
                display.value='error';
            }
        }else {
            display.value+=value;
        }
    });
});

// 1) Calculator application-instead of using eval create logic from scratc
// 2) Make a digital clock