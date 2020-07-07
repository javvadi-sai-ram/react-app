import React from "react";
import tw from "tailwind.macro";
import styled from '@emotion/styled';
import {WinOrLoses,GameState,ScoreUpdates,PlayAgainButton,TryAgainButton} from "../WinOrLose/WinOrLoseCss.js";



class WinOrLose extends React.Component{
    render(){
        let {ScoreUpdate,gameState}=this.props;
        return(
            <WinOrLoses color={this.props.theme} theme={this.props.theme}>
            <ScoreUpdates>{ScoreUpdate}</ScoreUpdates>
            <GameState>YOU {gameState}</GameState>
            {gameState==="WON"?
            <PlayAgainButton onClick={this.props.onPlayAgain}>Play Again</PlayAgainButton>:
            <TryAgainButton onClick={this.props.onPlayAgain}>Try Again</TryAgainButton>}
            </WinOrLoses>
            );
    }
}
export default WinOrLose;