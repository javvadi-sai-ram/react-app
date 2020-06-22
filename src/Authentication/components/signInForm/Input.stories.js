import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs,text} from '@storybook/addon-knobs';



import "./styledComponent.js";
import {Inputs} from "./signInForm";



export default {
   component: Inputs,
   title: 'src/components/Inputs'
};


export const defaultView = () => <Inputs
palceholder={text("placeholder","userName")}
value={text("value","sairam")}
/>;


export const knobs = () => <Inputs
palceholder={text("placeholder","userName")}
value={text("value","sairam")}
text={text("text","text")}
/>;


knobs.story={
   decorators:[withKnobs]
}
