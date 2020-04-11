/** @jsx jsx */ 
/*global styled*/
import React from "react";
import {Provider,inject} from "mobx-react"; 
import {observer} from "mobx-react";
import {observable} from "mobx";


/*class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = { 
      dearray:"",
      array:["stfdyygfwegf1","dsugfuwgeuwgeu2","dgweejjuyewg3","jhsvdyufg4","wqduysygduyweg5"]
      };
  }

  handleClick() {
    
    var index = Math.floor(Math.random() * (this.state.array.length));
    alert(index)
    this.setState({dearray:this.state.array[index]});
  }

  render() {
     const {dearray}=this.props;
    if(dearray!==""){
    return (
      <div>
        <button className="m-6" onClick={this.handleClick.bind(this)}>Click</button>
        <div>The number is: {this.state.dearray}</div>
      </div>
    );
    }
  }
}*/







@inject("temp")
class Page3 extends React.Component{
  render(){
    const {temp}=this.props;
    console.log("2",temp)
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
    const {temp}=this.props;
    console.log("1",temp)
    return(
      <div>
      <input type="text" value={this.value} onChange={this.handleClick}/>
    <Page3 name={this.name}/>
    </div>
    )
  }
}


class Page1 extends React.Component{
  render(){
    const {temp}=this.props;
    return(
      <Provider temp={'value'}>
      <Page2/>
      </Provider>
      )
  }
}


export default Page1;


/*  >*/



