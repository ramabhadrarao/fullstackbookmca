function Testmap(){
    const fruits=["banana","apple","mango"];
    return(
        <>
        <ul className="list list-group">

            {
                fruits.map((fruit,index)=>(
                    <li className="list-group-item" key={index}>{fruit}</li>
                ))

            }
        </ul>
        
        </>
    );

}

export default Testmap;