import React from "react";
import {observer} from "mobx-react";
import gameStore from "../../../stores/GridGameStores/gridStores";
import Cell from "../Cell/index";

import tw from "tailwind.macro";
import styled from '@emotion/styled';

const EachCell=styled.div`${tw`flex border border-black m-4 p-4`}`;

@observer
class GameField extends React.Component{
    
    cells=()=>{
        let a=gameStore.currentLevelGridCells.map((item)=>{
            return(
                <EachCell key={item.id}>
                  {item.id}
                </EachCell>
                )
        })
        return a
    }
    
    render(){
    gameStore.setGridCells()
        return(
            <div className="grid gap-4 grid-cols-3">
            {this.cells()}
            </div>
            );
    }
}

export default GameField;