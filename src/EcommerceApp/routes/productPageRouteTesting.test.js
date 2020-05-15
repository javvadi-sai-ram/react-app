/*global expect*/
import ProductStore from "../stores/productStore/productStores";
import ProductAPI from "../services/productServices";
import CartStore from "../stores/cartStore";
import {createMemoryHistory} from "history";      
import { API_SUCCESS, API_INITIAL, API_FAILED, API_FETCHING } from "@ib/api-constants";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { PRODUCTPAGE_PATH} from "../constants/APIConstants";
import ProductPageRouter from "./productPageRoute.js";


const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));


describe("ProductStore tests",()=>{
    let productStore;
    let productAPI;
    
    beforeEach(()=>{
        productAPI=new ProductAPI();
        productStore=new ProductStore(productAPI);
    });
    
    
  it("should test initialising ProductStore", () => {
    const history= createMemoryHistory()
   
    
    
    expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    expect(productStore.getProductListAPIError).toBe(null);
  });
});






