import React from "react";
import ProtectedRoute from "../utils/ProtectedRoute/ProtectedRoute.js";
import {PRODUCTPAGE_PATH} from "../constants/APIConstants";
import ProductPageRouter from "./productPageRoute.js";

const ProductRouter = [
  <ProtectedRoute key={PRODUCTPAGE_PATH} path={PRODUCTPAGE_PATH} component = {ProductPageRouter} />
];

export default ProductRouter;