// import logo from './logo.svg';
import './App.css';
import WelcomeClass from './WelcomeClass';
import WelcomeFunction from './WelcomeFunction';
import Card from './Card';
function App() {

  const mydata=['Swarnandhra','Seetaramapuram','MCA'];
  return (
    <>
   <h1>Welcome</h1>
    {mydata.map((value)=>(
      <WelcomeClass name={value}/>
    ))}
  

   
   <WelcomeFunction name="MCA,Swarnandhra"/>
   <Card style={{
    color:'white',
    border:'4px solid green'
   }}>
    <h3>Hello</h3>
    <h2>i am child passing as card children</h2>
   </Card>
   </>
  );
}

export default App;
