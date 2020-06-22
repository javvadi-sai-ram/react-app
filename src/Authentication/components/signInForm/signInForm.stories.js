import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs,number,color} from '@storybook/addon-knobs';


import "./styledComponent.js";
import {SignInButton} from "./signInForm";


export default {
   component: SignInButton,
   title: 'src/components/SignInButton'
};


export const defaultView = () => <SignInButton />;


export const knobs= () => (
   <SignInButton
      color={color("color","white")}
      getUserSignInAPIStatus={number("number",100)}
   />
);
   
   
knobs.story = {
   decorators: [withKnobs]
}

   
   
   