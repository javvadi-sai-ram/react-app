import React from "react";
import {observer} from "mobx-react";
import gameStore from "../../../stores/GridGameStores/gridStores";
import level from "../../../stores/GridGameStores/level.json";
import Cell from "../Cell/index";
import {TotalCells} from "./styledComponents.js";


@observer
class GameField extends React.Component{
    
    
    componentDidMount(){
         this.timer = setTimeout(
            ()=>gameStore.resetGame(),  
            `${gameStore.cells}000`*2+gameStore.cells);
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    
    renderCells=()=>{
        return(
            gameStore.currentLevelGridCells.map(cells=>{
                return(
                    <Cell cells={cells} cellsCount={gameStore.cells}  boolForColorMode={this.props.boolForColorMode} key={cells.id}/>
                    );
            })
            );
    }
    
    render(){
        return(
                <TotalCells style={{width:level[gameStore.cells].gridWidth}}>
             {this.renderCells()}
            </TotalCells>
                );
    }
    
}

export default GameField;


