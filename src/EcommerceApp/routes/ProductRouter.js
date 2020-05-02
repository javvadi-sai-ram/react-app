import React from "react"
import ProtectedRoute from "../utils/ProtectedRoute/ProtectedRoute.js";
import {PRODUCTPAGE_PATH} from "../constants/APIConstants";
import ProductPage from "../components/productPage";

const ProductRouter = [
 
  <ProtectedRoute key={PRODUCTPAGE_PATH} path={PRODUCTPAGE_PATH} component = {ProductPage} />
];


export default ProductRouter;