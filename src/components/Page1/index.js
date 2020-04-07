/** @jsx jsx */ 
/*global styled*/
import React from "react";
import logo from "../../logo.svg";
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { render } from 'react-dom';


const Button=styled.button`
color:white;
background:red;
padding:7px 10px;
border-radius:5px;
&:hover{
  background:blue;
}
`


class Page1 extends React.Component {

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
}


export default Page1;


/*  >*/



