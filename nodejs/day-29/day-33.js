const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

//mongodb://localhost:27017/{name_of_DB}
const MONGO_URL='mongodb://localhost:27017/todoDB';

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

//MongoDB model
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Todo=mongoose.model('Todo',todoSchema);

//Get all todos
app.get('/api/todos',async(req,res)=>{
    try{
      const todos=await Todo.find();
      res.json(todos);
    }catch(err){
      res.status(500).json({message:err.message});
    }
});

//POST  to create new todo
app.post('/api/todos',async(req,res)=>{
    try{
      const { title }=req.body;
      const newTodo=new Todo({title});
      await newTodo.save();
      res.status(201).json(newTodo);
    }catch(err){
       res.status(500).json({message:err.message});
    }
});


// PUT update todo by ID
app.put('/api/todos/:id', async (req, res) => {
  try {
    const { title, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE todo by ID
app.delete('/api/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Mongo Connected');
    app.listen(PORT,()=>{
        console.log("Server running on port:5000");
    });
})
.catch(err=> console.log("MongoDB connection error",err));