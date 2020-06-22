import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs,number,color} from '@storybook/addon-knobs';
import productListResponse from "../../../fixtures/getUserResponse.json"


import "./styledComponent.js";
import Product from "./product.js";


export default {
   component: Product,
   title: 'src/components/Product'
};


let productArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//export const defaultView=()=><Product />
