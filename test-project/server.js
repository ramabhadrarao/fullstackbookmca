const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();



app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
res.send("Welcome MCA");
});

app.get('/showname',(req,res)=>{
res.status(201).json({'message':'Swarnandhra college'});
});

app.post('/ping',(req,res)=>{
    const {name,age}=req.body;
    res.status(200).json({'name':name,'age':age});
});

app.post('/add',(req,res)=>{
    const {x,y}=req.body;
     const answer=x+y;
    res.status(200).json({"result":answer});
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log('Server Startded with port');
});