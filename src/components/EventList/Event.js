import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";



@observer
class Event extends React.Component{
    @observable isEditEvent;
    constructor(props){
        super(props);
  
        this.isEditEvent=false;
    }
    onDeleteEvent=()=>{
        this.props.onDeleteEvent(this.props.object);
    }
    onEditEvent=()=>{
        {this.isEditEvent?this.isEditEvent=false:this.isEditEvent=true}
        
    }
    render(){
        if(this.isEditEvent===false){
        return(
            <div>
           <input defaultValue={this.props.object.name}/>
           <input defaultValue={this.props.object.Location}/>
           <button onClick={this.onEditEvent}>Edit</button>
           <button onClick={this.onDeleteEvent}>Delete</button>
            </div>
            );}
            else{
            return(
                <div>
             <input type="text" defaultValue={this.props.object.name}/>
             <input type="text" defaultValue={this.props.object.Location}/>
             <button onClick={this.onEditEvent}>Update Event</button>
             </div>
             );
            }
    }
}

export default Event;