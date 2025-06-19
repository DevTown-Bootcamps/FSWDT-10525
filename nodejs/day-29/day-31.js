const express=require('express');
const app=express();

app.use(express.json());

let todos=[
    {id:1,task:'Learn Nodejs',done:false},
    {id:2,task:'Build rest API',done:false}
];

app.get('/api/todos',(req,res)=>{
    res.json(todos);
});

app.get('/api/todos/:id',(req,res)=>{
    const todo=todos.find(t=>t.id===parseInt(req.params.id));
    if(!todo){
        return res.status(404).json({message:'Todo not found'});
    }
    res.json(todo);
});

app.post('/api/todos',(req,res)=>{
    const {task}= req.body;

    if(!task){
        return res.status(400).json({message:'Task is required'});
    }

    const newTodo={
        id:todos.length+1,
        task,
        done:false
    }

    todos.push(newTodo);
    res.status(200).json(newTodo);
});

app.put('/api/todos/:id',(req,res)=>{
    const todo=todos.find(t=>t.id===parseInt(req.params.id));
    if(!todo){
        return res.status(404).json({message:'Todo not found'});
    }

    const {task,done}=req.body;

    if(task!==undefined) todo.task=task;
    if(done!==undefined) todo.done=done;

    res.json(todo);
});

app.delete('/api/todos/:id',(req,res)=>{
    const todo=todos.findIndex(t=>t.id===parseInt(req.params.id));
    if(!todo){
        return res.status(404).json({message:'Todo not found'});
    }

    todos.splice(todo,1);
    res.json({message:'Todo deleted'});
});

app.listen(3000,()=>{
    console.log('Server is up and running on port 3000');
})




const expressStudent = require('express');
const studentApp = expressStudent();
studentApp.use(expressStudent.json());

let students = [
  { id: 1, name: 'Alice', course: 'Math', active: true },
  { id: 2, name: 'Bob', course: 'Science', active: false }
];

// // 📥 GET all students
// studentApp.get('/api/students', (req, res) => {
//   res.json(students);
// });

// // 📥 GET a student by ID
// studentApp.get('/api/students/:id', (req, res) => {
//   const student = students.find(s => s.id === parseInt(req.params.id));
//   if (!student) return res.status(404).json({ message: 'Student not found' });
//   res.json(student);
// });

// // ➕ POST - add a student
// studentApp.post('/api/students', (req, res) => {
//   const newStudent = {
//     id: students.length + 1,
//     name: req.body.name,
//     course: req.body.course,
//     active: req.body.active !== undefined ? req.body.active : true
//   };
//   students.push(newStudent);
//   res.status(201).json(newStudent);
// });

// // ✏️ PUT - update student
// studentApp.put('/api/students/:id', (req, res) => {
//   const student = students.find(s => s.id === parseInt(req.params.id));
//   if (!student) return res.status(404).json({ message: 'Student not found' });
//   student.name = req.body.name || student.name;
//   student.course = req.body.course || student.course;
//   student.active = req.body.active !== undefined ? req.body.active : student.active;
//   res.json(student);
// });

// // ❌ DELETE - remove student
// studentApp.delete('/api/students/:id', (req, res) => {
//   students = students.filter(s => s.id !== parseInt(req.params.id));
//   res.json({ message: 'Student deleted successfully' });
// });

// studentApp.listen(3001, () => console.log('🎓 Student API running at http://localhost:3001'));
