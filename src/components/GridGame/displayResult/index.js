import React from "react";
import {DisplayResultDiv,YouDoneWell,Won,DoneWellAndWon,PlayAgainButton,NumberLevel} from "./styledComponents.js";

class DisplayResult extends React.Component{
    render(){
        const {level}=this.props;
        return(
        <DisplayResultDiv>
            <DoneWellAndWon>
                <YouDoneWell>Congratulations! You Completed All The Levels</YouDoneWell>
                <NumberLevel>{level}</NumberLevel>
                <Won>You Won!</Won>
            </DoneWellAndWon>
            
                <PlayAgainButton onClick={this.props.onPlayAgainClick}>Play Again</PlayAgainButton>
            
        </DisplayResultDiv>
            );
    }
}

export default DisplayResult;


