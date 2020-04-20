import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import level from "../../../stores/GridGameStores/level.json";
import gameStore from "../../../stores/GridGameStores/gridStores";
import {EachCell,EachCellWithColor,EachCellElement} from "./styledComponent.js";

@observer
class Cell extends React.Component{
    @observable isClickedOnCell;  
    @observable shouldShowHiddenCells
    
    
    constructor(props){
        super(props);
        this.isClickedOnCell=false;
        this.shouldShowHiddenCells=true;
    }
    
       onCellClick=()=>{
             if(!this.isClickedOnCell){
               this.isClickedOnCell=true;
             gameStore.onCellClick(this.props.cells.isHidden);
           }
    }
    
        componentDidMount=()=>{
            this.timer = setTimeout(
            () =>this.shouldShowHiddenCells=false,
            `${this.props.cellsCount}000`);
        }
        
  cells(){
         const {cellsCount,cells}=this.props;
    if(this.shouldShowHiddenCells===true){
        if(cells.isHidden===false){
            return(<EachCell stylewidth={level[cellsCount].cellWidth}  key={cells.id}></EachCell>);
        }
        else
        {
            return(<EachCellWithColor  key={cells.id} stylewidth={level[cellsCount].cellWidth} boolForColorMode={this.props.boolForColorMode}></EachCellWithColor>);
        }
        
    }
    else{
        return(<EachCell stylewidth={level[cellsCount].cellWidth} onClick={this.onCellClick} boolForColorMode={this.props.boolForColorMode} isClickedOnCell={this.isClickedOnCell} isHidden={cells.isHidden} id={cells.id} key={cells.id}>
        </EachCell>);
    }
        
       
    }
    
    render(){
        return(
         <EachCellElement>
            {this.cells()}
            </EachCellElement>
            );
    }
}

export default Cell;







