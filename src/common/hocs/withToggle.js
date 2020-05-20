import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import ViewEditToggle from "../component/viewEditToggle";



const WithToggle=(WrappedComponent)=>{
    @observer
    class NewComponent extends React.Component{
        @observable toggleStatus=false;
        onToggle=()=>{
            if(this.toggleStatus===false){
                this.toggleStatus=true;
            }
           else{
               this.toggleStatus=false;
           }
        }
        render(){
            return <WrappedComponent onToggle={this.onToggle} toggleStatus={this.toggleStatus} {...this.props}/>
        }
    }
    return NewComponent;
};


export default WithToggle;