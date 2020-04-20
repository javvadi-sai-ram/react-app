import React from "react";
import {observer} from "mobx-react";
import {HeaderPart,LevelAndLightMode,Level,LightMode,TopLevel} from "./styledComponents.js";

@observer
class Header extends React.Component{
    render(){  
        return(
               <HeaderPart>
                  <TopLevel>
                       Top Level:{this.props.toplevel}
                 </TopLevel>
                  <LevelAndLightMode>
                       <Level>Level:{this.props.level}</Level>
                       <LightMode borderMode={this.props.boolForColorMode}  onClick={this.props.lightMode}>Mode:{this.props.boolForColorMode?"light":"dark"}</LightMode>
                 </LevelAndLightMode>
              </HeaderPart>
            );
    }
}

export default Header;