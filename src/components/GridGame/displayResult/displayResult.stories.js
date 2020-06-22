import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs,text,number} from '@storybook/addon-knobs';



import "./styledComponents.js";
import DisplayResult from ".";



export default {
   component: DisplayResult,
   title: 'src/components/DisplayResult'
};





export const defaultView = () => <DisplayResult
/>;



export const knobs = () => <DisplayResult
level={number("level",7)}
/>;


knobs.story={
   decorators:[withKnobs]
}