import React from "react";
import {observer} from "mobx-react";
import {observable,action} from "mobx";

const WithScreenSizeDetectors=(WrappedComponent)=>{
    @observer
    class NewComponent extends React.Component{
        @observable display="";
        
        
        componentDidMount(){
            this.handleResize();
          window.addEventListener('resize', this.handleResize)
        }
        
        @action.bound
        handleResize(){
        if(window.innerWidth<576){
            this.display="Mobile";
        }
        else if(window.innerWidth >= 576 && window.innerWidth < 992){
            this.display="Tablet"
        }
        else{
            this.display="Desktop"
        }
        
        }
        
        render(){
            return(
                <WrappedComponent display={this.display} {...this.props}/>
                );
        }
    }
    return NewComponent;
};


export default WithScreenSizeDetectors;