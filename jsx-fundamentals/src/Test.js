import modi from './modi.jpeg';
import logo from './logo.svg';
import mylogo from './images/logo192.png';
import App from './App';
function Test(){
    /*this is my comment*/
return(
    <>
    {/* this is my comment */}
    <App imagename={modi} name="Raju"  department="Finance" />
    <App imagename={logo} name="Rani"  department="Acoounts" />
    <App imagename={mylogo} name="Harini"  department="Common Office" />
    </>
);

}

export default Test;