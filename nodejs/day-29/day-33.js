const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET='jashdjshfdj_46563dgfgd_weeeew...dihghfghreihgfghig';
//mongodb://localhost:27017/{name_of_DB}
const MONGO_URL='mongodb://localhost:27017/todoDB';

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true  
  },
  password:{
    type:String,
    required:true
  }
});

const User=mongoose.model("User",userSchema);

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

function authenticateToken(req,res,next){
   const authHeader=req.Header['authorization'];
   const token=authHeader && authHeader.split(' ')[1];

   if(!token) return res.status(401).json({messgae:"Token not found"});

   jwt.verify(token,JWT_SECRET,(ERR,USER=>{
    if(err) return res.status(403).json({message:"Invalid token"});
    req.user=user;
    next();
   }))
};

//register api
app.post("/api/register",async(req,res)=>{
   const {username,password} =req.body;

   try{
     const userExist=await User.findOne({username});

     if(userExist) return res.status(400).json({message:"This username already exists"});

     const hashPassword=await bcrypt.hash(password,10);

     const newUser=new User({
      username,
      password:hashPassword
     });
     await newUser.save();
     res.status(201).json({message:"user has been registered"});
   }catch(err){
     res.status(500).json({message:"Internal server error"});
   }
})

//login
app.post("/api/login",async(req,res)=>{
  const {username,password}=req.body;

  try{
   const user=await User.findOne({username});

   if(!user) return res.status(404).json({messgae:"The user that you are trying to search does not exist"});

   const isMatch=await bcrypt.compare(password,user.password);

   if(!isMatch) return res.status(400).json({messgae:"Password did not match"});

   const token=jwt.sign({id:user._id},JWT_SECRET,{expiresIn:'1h'});
   res.status(200).json({message:"Login Success",token});
  }catch(err){

  }
})

//Get all todos
app.get('/api/todos',authenticateToken,async(req,res)=>{
    try{
      const todos=await Todo.find();
      res.json(todos);
    }catch(err){
      res.status(500).json({message:err.message});
    }
});

//POST  to create new todo
app.post('/api/todos',authenticateToken,async(req,res)=>{
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
app.put('/api/todos/:id',authenticateToken, async (req, res) => {
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
app.delete('/api/todos/:id',authenticateToken, async (req, res) => {
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


//POST: /api/login

//Body: {"username":"anshul","password" : "123456"}

//response: {token:"JWT_TOKEN"}

