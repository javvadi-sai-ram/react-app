import React from "react";
class YourState extends React.Component{
    constructor(){
        super();
            this.state={
                value:"",
                sub:""
            }
    }
    handleClick=(event)=>{
        this.setState({value:event.target.value});
    }
    onSubmit=()=>{
        if(this.state.value!==""){
        this.setState({sub:`I am from ${this.state.value} state`});
        }
        else{
            this.setState({sub:null});       
        }
    }
    render(){
        return (
            <div>
            <select onChange={this.handleClick}>
            {this.props.statelist.map((item,index)=>{
                return(
                <option key={index} value={item} >{item}</option>
                );
            })}
            </select>
            <div>
            <input type="submit" onClick={this.onSubmit} style={{margin:"4px",borderRadius:"2px"}}/>
            <h4>{this.state.sub}</h4>
            </div>
            </div>
            )
    }
}
export{YourState}