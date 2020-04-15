import React from "react";
import gameStore from "../../../stores/GridGameStores/gridStores";
import GameField from "../GameFeild/index";

class GridMemoryGame extends React.Component{
    
    render(){
        return(
            <div>
            <GameField/>
            </div>
            );
    }
}

export default GridMemoryGame;