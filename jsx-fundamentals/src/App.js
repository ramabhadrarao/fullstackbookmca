//import logo from './logo.svg';
// import './App.css';

function App(props) {
  return (
    <>
    <div className="card" style={{
      width:'18rem'
      }}>
 <img src={props.imagename} className="card-img-top" alt="..." />
 <div className="card-body">
   <h5 className="card-title">{props.name}</h5>
   {/* my comment*/}
   <p className="card-text">{props.department}</p>
   <a href="http://swarnandhra.ac.in" className="btn btn-primary">Go somewhere</a>
 </div>
</div>
    </>
  );
}

export default App;
