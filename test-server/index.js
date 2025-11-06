const express=require('express');
const cors=require('cors');
const PORT=5000;
const app=express();

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome');
});

app.post('/sum',(req,res)=>{
const {a,b}=req.body;
const sum=Number(a)+Number(b)+10;
res.status(201).json({result:sum});

});
app.post('/pnr',(req,res)=>{
    const {p,n,r}=req.body;
    const i=(p*n*r)/100;
    res.status(201).json({result:i});
});

app.listen(PORT,()=>{
    console.log("the server started on", {PORT});
});