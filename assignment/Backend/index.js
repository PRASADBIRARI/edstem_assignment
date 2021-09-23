const express = require('express')

const mongoose= require("mongoose")
const app = express();
app.use(express.json())


const port = 8000;
const connect=()=>{
    return mongoose.connect(process.env.DATABASE_ACCESS,{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

var usersSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const users=mongoose.model("users",usersSchema);

app.get("/users",async(req,res)=>{
    const data=await users.find({}).lean().exec();
    res.status(200).json(data);
})

app.get("/users/:id",async(req,res)=>{
    const data=await users.findById(req.params.id);
    res.status(200).json(data);
})

app.post("/users",async(req,res)=>{
    const data=await users.create(req.body);
    res.status(201).json(data);
})

app.patch("/usersPatching/:id",async(req,res)=>{
    const data=await users.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    });
    res.status(201).json(data);
})


const start=async()=>{
    await connect();
    app.listen(port,()=>{
        console.log(`server is running at ${port}`);
    })
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });
start()