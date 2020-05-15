import {observable,action,computed} from "mobx";
import {observer,inject} from "mobx-react";
import {API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from "@ib/mobx-promise";
//import productStore from "./productStore/productStores"
import ProductModel from "../../model/productModel/ProductModel";
import sizeFilter from "../../components/sizeFilter/sizeFilter"
 

class ProductStore{
   @observable productList;
   @observable getProductListAPIStatus;
   @observable getProductListAPIError;
   productsAPIService;
   @observable sizeFilter;
   @observable sortBy
   
   constructor(productsAPIService){
       this.init();
       this.productsAPIService=productsAPIService;
   }
   
   init(){
       this.productList=[];
       this.getProductListAPIError=null;
       this.getProductListAPIStatus=API_INITIAL;
       this.sizeFilter=[];
       this.sortBy="Select";
   }
   
   @action.bound
   setProductListAPIResponse(ProductResponse){
       this.EachProductList(ProductResponse);
   }
   
   @computed get getFilterSizes(){
       let FilterValues=[]
       this.productList.map(items=>{
           items.availableSizes.map(item=>{
               FilterValues.push(item)
           })
       }) 
        let uniqueNames = Array.from(new Set(FilterValues));
      return  uniqueNames;    
   }
   
   @action.bound
   EachProductList(event){
       let a=[];
       event.map(item=>{
           const productModel=new ProductModel({
           productId:item.id,
           availableSizes:item.availableSizes,
           currencyFormat:item.currencyFormat,
           currencyId:item.currencyId,
           description:item.description,
           installmentsCount:item.installments,
           isFreeShipping:item.isFreeShipping,
           price:item.price,
           printStyle:item.style,
           title:item.title,
           imageURL:item.image})
           a.push(productModel);
       })
       
       this.productList=a;
   }
   
 
   @action.bound
   setProductListAPIStatus(apiStatus){
       this.getProductListAPIStatus=apiStatus;
   }
   
   @action.bound
   setProductListAPIError(error){
       this.getProductListAPIError=error;
   }
   
   @action.bound
    getProductList(){
        const ProductPromise=this.productsAPIService.getProductsAPI();
        return bindPromiseWithOnSuccess(ProductPromise)
        .to(this.setProductListAPIStatus,this.setProductListAPIResponse)
        .catch(this.setProductListAPIError);
    }
    
    
    @action.bound
    onSelectSize(event){
        let FindingSizeFilters=this.sizeFilter.find(each=>each===event);
        if(FindingSizeFilters===undefined){  
            this.sizeFilter.push(event);
        }
        else{
            this.sizeFilter.remove(event);
        }
    }
    
    
    @computed get sortedAndFilteredProducts(){
        let products=this.productList.filter(item=>{
            if(this.sizeFilter.length===0){
                return true;
            }
            else{
                let sort=(this.sizeFilter.find(each=>item.availableSizes.includes(each)));
                 return sort===undefined?false:true;
            }
        });
        //return products;
        switch(this.sortBy){
            case "Select":
                return products;
            case "Ascending":
                return products.sort((a,b)=>a.price-b.price);
            case "Decending":
                return products.sort((a,b)=>b.price-a.price);
        }
    }
    
    @action.bound
    onChangeSortBy(event){
        this.sortBy=event;
    }
    
    
   
    
    
}

export default ProductStore;