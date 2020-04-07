import React from "react";
import { FaRegMoon } from 'react-icons/fa';
 
class Heading extends React.Component{
    
    render(){
        return(
            <div className="head-flexing">
            <div>
            <h4>Where in the World?</h4>
            </div>
            <div>
            <h4 onClick={this.props.lightMode} ><FaRegMoon />&nbsp;&nbsp;{this.props.boolForColorMode?"Light Mode":"Dark Mode"}</h4>
            </div>
            </div>
            );
    }
}

export {Heading};