import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text,color } from '@storybook/addon-knobs'


import LoadingView from "./LoadingView";


export default {
   component:LoadingView ,
   title: 'Common/LoadingView'
};




export const defaultView = () => <LoadingView 
 fill={color("color","red")}
/>


export const knobs = () => <LoadingView 
  fill={color("color","red")}
/>




knobs.story = {
   decorators: [withKnobs]
}



