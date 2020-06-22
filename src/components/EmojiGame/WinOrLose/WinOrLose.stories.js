import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs,number,color,text,object} from '@storybook/addon-knobs';

import "./WinOrLoseCss";
import WinOrLose from "./WinOrLose";

 let themeOptions={
      Light:{
        id:"0",
        color:"#fff",
        displayText:"Dark Theme",
        textColor:"black",
        cardColor:"white",
        background:"#ebf8ff",
        red:"red",
        green:"green",
        totalTheme:"white"
      },
        Dark:{
        id:"1",
        color:"#2b3945",
        displayText:"Light Theme",
        textColor:"White",
        cardColor:"#2b6cb0",
        background:"black",
        red:"red",
        green:"green",
        totalTheme:"#00264d",
      }
    }
  


export default {
   component: WinOrLose,
   title: 'src/components/WinOrLose'
};


export const WindefaultView = () => <WinOrLose 
theme={object("theme",themeOptions['Light'])}
 gameState={text("state","WON")}
 ScoreUpdate={text("ScoreUpdate",12)}
/>;

export const DarkWindefaultView = () => <WinOrLose 
theme={object("theme",themeOptions['Dark'])}
 gameState={text("state","WON")}
 ScoreUpdate={text("ScoreUpdate",12)}
/>;


export const defaultViewKnobs = () => <WinOrLose 
theme={object("theme",themeOptions['Dark'])}
 gameState={text("state","WON")}
 ScoreUpdate={text("ScoreUpdate",12)}
/>;


defaultViewKnobs.story= {
   decorators: [withKnobs]
};