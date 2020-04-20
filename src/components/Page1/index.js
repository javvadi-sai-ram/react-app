import React from "react";
import {Provider,inject} from "mobx-react"; 
import {observer} from "mobx-react";
import {observable} from "mobx";








class Page3 extends React.Component{
  render(){
    return(
    <div>
    hi
    </div>
    )
  }
}


@inject("temp")
@observer
class Page2 extends React.Component{
  @observable name;
  
  handleClick=(event)=>{
    this.name=event.target.value
  }
  render(){
    return(
      <div>
    <input type="text" value={this.name} onChange={this.handleClick}/>
    <Page3/>
    </div>
    )
  }
}


class Page1 extends React.Component{
  render(){
    //const {temp}=this.props;
    return(
      <div>
      <Page2/>
      </div>
      )
  }
}


export default Page1;


/*  >*/



