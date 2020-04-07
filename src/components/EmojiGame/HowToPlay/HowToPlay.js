import React from "react";
import {HowToPlayName,Instructions,Footer} from "../HowToPlay/HowToPlayCss.js";
class HowToPlay extends React.Component{
    render(){
        return(
            <Footer theme={this.props.theme}>
            <HowToPlayName>
                 How To Play?
            </HowToPlayName>
            <Instructions>
            Get points by clicking on an image but don't click on any image more than once!
            </Instructions>
            </Footer>
            )
    }
}
export default HowToPlay;