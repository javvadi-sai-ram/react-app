import React from "react";

class Cell extends React.Component{
    render(){
        return(
         <div>
         {console.log(this.props.cells)}
         </div>
            )
    }
}

export default Cell;