import React from "react";
import gameStore from "../../../stores/GridGameStores/gridStores";
import GameField from "../GameFeild/index";
import DisplayResult from "../displayResult/index";
import Header from "../Header/index";

import {observer} from "mobx-react";
import {TotalGameColor} from "./styledComponents.js";


@observer
class GridMemoryGame extends React.Component{
    componentDidMount(){
        gameStore.setGridCells();
    }
    
    onPlayAgainClick=()=>{
       gameStore.onPlayAgainClick();    
    }
    
    render(){
        return(
            <TotalGameColor SelectedTheme={this.props.boolForColorMode}>
            <Header lightMode={this.props.lightMode} boolForColorMode={this.props.boolForColorMode} toplevel={gameStore.toplevel} level={gameStore.level}/>
            {gameStore.cells===9?<DisplayResult level={gameStore.level} onPlayAgainClick={this.onPlayAgainClick}/>:(gameStore.currentLevelGridCells.length>0)?<GameField boolForColorMode={this.props.boolForColorMode} key={gameStore.currentLevelGridCells[0].id}/>:null}
            </TotalGameColor>
            );
    }
}

export default GridMemoryGame;