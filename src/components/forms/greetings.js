import React from "react";

class Greetings extends React.Component{
    constructor(){
        super();
    this.state={
        userInputText:"",
        displayName:"",
        parentCounter:0
        };
    }
    
    handleUserInput=(event)=>{
       this.setState({
            userInputText:event.target.value
        });
    
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
    if(this.state.userInputText!==""){
        this.setState({
            displayName:"Hello "+this.state.userInputText +", Have a Nice Day",
            userInputText:""
        });
     }
    }
    
    render(){
    return(
    <form >
    <input type="text" value={this.state.userInputText} onChange={this.handleUserInput} style={{border:"3px solid black"}}/>
    <br/>
    <input type="submit" value="Greet" onClick={this.handleSubmit} style={{border:"2px solid black",margin:"10px"}}/>
    <h3>{this.state.displayName}</h3>
    </form>
);
}
}
export{Greetings};


 