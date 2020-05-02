import React from "react";


class HelloMessage extends React.Component{
    render(){
        return(
            <div>
            <span>`Hello ${this.props.message}`</span>
            </div>
            );
    }
}

export {HelloMessage};