/*global expect*/
/*global jest*/
import React from "react";
import { API_SUCCESS, API_INITIAL, API_FAILED, API_FETCHING } from "@ib/api-constants";
import ProductStore from "./productStores";
import ProductAPI from "../../services/productServices";
import productListResponse from "../../fixtures/productListResponse.json";
import {sortAscending,sortDecending} from "../../utils/productTestSorting";




describe("ProductStore tests",()=>{
    let productStore;
    let productAPI;
    
    beforeEach(()=>{
        productAPI=new ProductAPI();
        productStore=new ProductStore(productAPI);
    });
    
    
    it("should test initialising ProductStore", () => {
    expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    expect(productStore.getProductListAPIError).toBe(null);
  });
  
  it("should test fetching data for ProductStore",()=>{
      let mockLoadingPromise=new Promise(function(resolve,reject){});
      let mockSignInAPI=jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      productAPI.getProductsAPI=mockSignInAPI;
      
      productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
  });
  
  it("should test Success data for ProductStore",async()=>{
      let mockLoadingPromise=new Promise(function(resolve,reject){
          resolve(productListResponse);
      }); 
      let mockSignInAPI=jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      productAPI.getProductsAPI=mockSignInAPI;
      
      await productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
  });
  
  it("should test Failture data for ProductStore",async()=>{
      
      jest.spyOn(productAPI, 'getProductsAPI').mockImplementation(() => Promise.reject());
      
      let productStore=new ProductStore(productAPI);
      
      await productStore.getProductList();
      expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
  });
  
  it("should length of productsList be 16",async()=>{
      await productStore.getProductList();
      
     expect(productStore.productList.length).toBe(productListResponse.length);
  });
  
  it("should test get decending Proper",()=>{
      productStore.sortBy="Decending";
      productStore.productList=productListResponse;
      expect(productStore.sortedAndFilteredProducts[0].title).toEqual(sortDecending[0].title);
  });
  
  it("should test get Ascending Proper",async()=>{
      productStore.onChangeSortBy("Ascending");
      productStore.productList=productListResponse;
      expect(productStore.sortedAndFilteredProducts[15].title).toBe(sortAscending[0].title);
  });
  
  it("should test the size XS",()=>{
      productStore.setProductListAPIResponse(productListResponse);
     productStore.onSelectSize("XS");
     let listOfXS=[productListResponse[0],productListResponse[7]];
     expect(productStore.sortedAndFilteredProducts.length).toEqual(listOfXS.length);
     expect(productStore.sortedAndFilteredProducts[0].title).toBe(listOfXS[0].title);
     expect(productStore.sortedAndFilteredProducts[1].title).toBe(listOfXS[1].title);
  });
  
  
   it("should test the size S",()=>{
      productStore.setProductListAPIResponse(productListResponse);
     productStore.onSelectSize("S");
     let listOfS=[productListResponse[0],productListResponse[5],productListResponse[6],productListResponse[12]];
     expect(productStore.sortedAndFilteredProducts.length).toEqual(listOfS.length);
     expect(productStore.sortedAndFilteredProducts[0].title).toBe(listOfS[0].title);
  });
  
  it("should test the size M",()=>{
      productStore.setProductListAPIResponse(productListResponse);
     productStore.onSelectSize("M");
     let listOfM=[productListResponse[1],productListResponse[2],productListResponse[3],productListResponse[4],productListResponse[10],];
     expect(productStore.sortedAndFilteredProducts.length).toEqual(listOfM.length);
     expect(productStore.sortedAndFilteredProducts[0].title).toBe(listOfM[0].title);
  });
  
  
   it("should test the size L",()=>{
      productStore.setProductListAPIResponse(productListResponse);
     productStore.onSelectSize("L");
     expect(productStore.sortedAndFilteredProducts.length).toEqual(10);
  });
  it("should test the size XL",()=>{
      productStore.setProductListAPIResponse(productListResponse);
     productStore.onSelectSize("XL");
     expect(productStore.sortedAndFilteredProducts.length).toEqual(10);
  });
  it("should test the size XXL",()=>{
      productStore.setProductListAPIResponse(productListResponse);
     productStore.onSelectSize("XXL");
     expect(productStore.sortedAndFilteredProducts.length).toEqual(5);
  });
  it("should size items Products",()=>{
      productStore.setProductListAPIResponse(productListResponse);
      expect(productStore.getFilterSizes.length).toBe(6);
  });
  it("should size items Products removed",()=>{
      productStore.sizeFilter=["S","XS","L"]
      productStore.setProductListAPIResponse(productListResponse);
      productStore.onSelectSize("XS")
      expect(productStore.sizeFilter.length).toBe(2)
  });
  
})