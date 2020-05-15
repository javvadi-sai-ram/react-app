import React from "react";
import ProductPage from "../components/productPage";
import {observer,inject} from "mobx-react";




@inject('productStore','cartStore')
@observer
class ProductPageRouter extends React.Component{
    
      componentDidMount(){
        this.doNetWorkCalls();
    }
    
    doNetWorkCalls=()=>{
       this.props.productStore.getProductList();    
       
    }
    
    render(){
        const {productStore,cartStore}=this.props;
        return(
            <ProductPage
            cartStore={cartStore}
            productStore={productStore}
            getProductListAPIStatus={productStore.getProductListAPIStatus}
            getProductListAPIError={productStore.getProductListAPIError}
            />
            );
        
    }
}

export default ProductPageRouter;