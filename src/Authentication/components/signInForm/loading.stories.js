import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs,number,color} from '@storybook/addon-knobs';



import "./styledComponent.js";
import {LoaderChange} from "./signInForm";


export default {
   component: LoaderChange,
   title: 'src/components/LoaderChange'
};


export const defaultView = () => <LoaderChange
color={color("color","red")}
width={number("width",100)}
height={number("height",100)}
/>;


export const knobs = () => <LoaderChange
color={color("color","red")}
width={number("width",100)}
height={number("height",100)}
/>;


knobs.story={
    decorators:[withKnobs]
}
