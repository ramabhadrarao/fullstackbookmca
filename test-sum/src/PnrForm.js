import {useState} from 'react';
function PnrForm(){
const [p,setP]=useState(0);
const [n,setN]=useState(0);
const [r,setR]=useState(0);
const [i,setI]=useState(null);
const handleCalculateI=async (e)=>{
e.preventDefault();
const response=await fetch("http://localhost:5000/pnr",{
method:"POST",
headers:{
  "Content-Type": "application/json",  
},
body:JSON.stringify({p,n,r})

});

const data=await response.json();
setI(data.result);
//setI((Number(p)*Number(n)*Number(r))/100);
}
return(
    <>
    <form onSubmit={handleCalculateI}>
    p:<input type="number" value={p} onChange={(e)=>{setP(e.target.value);}} />
    n:<input type="number" value={n} onChange={(e)=>{setN(e.target.value);}} />
    r:<input type="number" value={r} onChange={(e)=>{setR(e.target.value);}} />
    <input type="submit" value="submit"/>
    </form>
    <h1>i={i}</h1>
    </>
);
}

export default PnrForm;