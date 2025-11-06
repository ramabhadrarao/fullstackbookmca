function WelcomeFunction(props){
return(
<>
<h2>Name:{props.name}</h2>
<p style={{
color:'white',
backgroundColor:'green',
border:'4px solid red'

}}>i am running from function component</p>
</>
);
}
export default WelcomeFunction;