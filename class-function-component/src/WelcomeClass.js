import { Component } from "react";
class WelcomeClass extends Component {
    render(){
        return(
            <div>
                <h2>Name:{this.props.name}</h2>
                <p style={{
                    color:'white',
                    backgroundColor:'red',
                    border:'3px solid green'
                }}>i am running from class component</p>
            </div>

        );
   }
}
export default WelcomeClass;