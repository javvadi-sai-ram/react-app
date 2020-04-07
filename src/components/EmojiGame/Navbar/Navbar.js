import React from "react";
import {EmojiHeader,ScoresAndTheme,Scores,TopScore,Theme,EmojiName} from "../Navbar/NavbarCss.js";

class Navbar extends React.Component{
    render(){
        let  {ScoreUpdate,topscore,theme}=this.props;
        return(
            <EmojiHeader theme={theme}>
              <div>
               <EmojiName>Emoji Game</EmojiName>
              </div>
              <ScoresAndTheme>
               <Scores>Score:{ScoreUpdate}</Scores>
               <TopScore>TopScore:{topscore}</TopScore>
               <Theme value="light" onClick={this.props.onChangeTheme}>{theme.displayText==="Light Theme"?"Dark Theme":"Light Theme"}</Theme>
              </ScoresAndTheme>
            </EmojiHeader>
            );
    }
}

export default Navbar;