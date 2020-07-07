import React from "react";
import { action } from '@storybook/addon-actions'
import { withKnobs, text,color } from '@storybook/addon-knobs'

import NoDataView from "."

import "./styledComponents";


export default {
   component:NoDataView,
   title: 'Common/NoDataView'
};


export const defaultView = () => <NoDataView 
/>;



export const knobs= () => (
<NoDataView 
  color={color("color","red")}
/>
)



knobs.story = {
   decorators: [withKnobs]
};
