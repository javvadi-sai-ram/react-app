import React from 'react';
let bool;
class DisableButton extends React.Component{
    constructor(){
        super();
        this.state={
            value:""
        }
        
    }
    handleCheckbox=(event)=>{
         bool=(event.target.checked)
        if(bool){
            this.setState({value:`I am disabled`})
        }
        else{
            this.setState({value:null})
        }
    }
    onSubmit=()=>{
        this.setState({value:`Hi, I am an enabled`})
    }
    render(){
        return(
            <div>
            <input type="checkbox" onClick={this.handleCheckbox}/>
            <span>Disable</span>
            <input type="button" value="clickMe" style={{borderRadius:"2px"}} onClick={this.onSubmit} disabled={bool}/>
            <h4>{this.state.value}</h4>
            </div>
            )
    }
}
export{DisableButton}