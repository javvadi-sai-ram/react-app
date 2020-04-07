import React from "react";

class VisitedCities extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array:[],
            Showmessage:""
        };
    }
    handleCheckboxClick=(event)=>{
        if(event.target.checked){
            let x=this.state.array.slice(0);
            x.push(event.target.value);
            this.setState({
                array:x
            });
        }
        if(!event.target.checked){
            let x=this.state.array.slice(0);
            let f=x.filter((item)=>item!==event.target.value);
            this.setState({
                array:f
            });
        }
    }
    renderCityOptions=()=>{
        let list=this.props.cities.map((item,i)=>{
          return (<div key={i}>
          <input type="checkbox" value={item} name="item" onChange={this.handleCheckboxClick}></input>
          <span>{item}</span>
          </div>
          );
        });
        return list;
    }
    showMessage=()=>{
        if(this.state.array.length>0){
        this.setState({
            ShowMessage:`I have visited these Cities ${this.state.array}`
        });
        }
        else{
            this.setState({
                ShowMessage:""
            })
        }
    }
    render(){
        return(
        <div>
        {this.renderCityOptions()}
        <div>
        <button onClick={this.showMessage}>Make your Choice</button>
        <h4>{this.state.ShowMessage}</h4>
        </div>
        </div>
        
        );
    }
}
export{VisitedCities};