import React from "react";
import {observable,action} from "mobx";
import {observer} from "mobx-react";


@observer
class MouseCoordinates extends React.Component{
    @observable x=0
    @observable y=0
    
    @action.bound
    coordinates(event){
        this.x=event.touches[0].clientX;
        this.y=event.touches[0].clientY;
    }
    render(){
        return(
            this.props.children(this.x,this.y,this.coordinates)
            
            );
    }
}




@observer
class DisplayMouseCoordinates extends React.Component{
    render(){
        return(
            <MouseCoordinates>
            {(x,y,coordinates)=>(
                <div onTouchMove={coordinates} style={{height:"100vh"}}>
                <div>DisplayMouseCoordinates</div>
                <div>The Mouse Position is ({x},{y})</div>
                </div>
            )}
            </MouseCoordinates>
            )
    }
    
}
export default DisplayMouseCoordinates;