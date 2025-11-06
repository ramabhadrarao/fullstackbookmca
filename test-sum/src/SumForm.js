import {useState} from 'react';
function SumForm(){
const [a,setA]=useState(0);
const [b,setB]=useState(0);
const [sum ,setSum]=useState(null);
async function handleSum(e){
    e.preventDefault();

    const response=await fetch("http://localhost:5000/sum",{
        method:"POST",
        headers:{
        "Content-Type": "application/json",

        },
        body:JSON.stringify({a,b})
    });

    const data=await response.json();
    setSum(data.result);
//    setSum(Number(a)+Number(b));
}


    return(
        <div>
            <form onSubmit={handleSum}>
                <input
                type="number"
                className="form-control"
                value={a}
                onChange={(e)=>{setA(e.target.value)}}
                />
                <input
                type="number"
                className="form-control"
                value={b}
                onChange={(e)=>{setB(e.target.value)}}
                />
                <input type="submit" className='btn btn-success' value="submit"/>
            </form>
            <h1>{sum}</h1>
        </div>
    );
}

export default SumForm;