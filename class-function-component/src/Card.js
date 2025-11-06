function Card(props){
    const defaultStyle={
        color:'red',
        backgroundColor:'yellow'
    };
return(
<div style={{...defaultStyle,...props.style}}>

{props.children}

</div>

);


}

export default Card;