const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");

addTaskBtn.addEventListener("click",addTask);

function addTask(){
    const taskText=taskInput.value.trim();

    if(taskText===""){
        alert("Please enter the task before submiting");
        return;
    }

    const li=document.createElement("li");

    const span=document.createElement("span");

    span.textContent=taskText;
    span.addEventListener("click",()=>{
        span.parentElement.classList.toggle("done");
    });

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.addEventListener("click",()=>{
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value="";
}