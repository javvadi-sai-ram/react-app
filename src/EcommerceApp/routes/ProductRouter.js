import React from "react";
import ProductPage from "../components/productPage";
import {Route} from "react-router-dom";
import {PRODUCTPAGE_PATH} from "../constants/APIConstants";


const ProductRouter = [
 
  <Route path={PRODUCTPAGE_PATH} component={ProductPage} />
];


export default ProductRouter;