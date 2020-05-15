import React from "react";
import {observer,inject} from "mobx-react";
import ProductLists from "../productList/productList";
import Header from "../Header";
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";



import SizeFilter from "../sizeFilter/sizeFilter";
import ProductCart from "../Cart/productCart/productCart";

import {TotalProductList,FilterBars,MainBar,Cart,ProductList} from "./styledComponent.js"



       


class ProductPage extends React.Component{
    
    
    
    
    renderUserList=observer(()=>{
        const {productStore,cartStore}=this.props;
        return(
        <ProductLists list={productStore.sortedAndFilteredProducts} cartStore={cartStore} productStore={productStore}/>
        
            );
    })
    
    
    render(){
        const {productStore,cartStore}=this.props;
        return (
    <div>
            <Header list={productStore.sortedAndFilteredProducts} productStore={productStore}/>
         <MainBar>
               <FilterBars>
                        <SizeFilter productStore={productStore}/>
               </FilterBars>
               <TotalProductList>
                        <LoadingWrapperWithFailure
                                  apiStatus={this.props.getProductListAPIStatus}
                                   apiError={this.props.getProductListAPIError}
                                    onRetryClick={this.props.doNetWorkCalls}
                                      renderSuccessUI={this.renderUserList}/>
                </TotalProductList>
                <Cart> 
                        <ProductCart cartStore={cartStore}/>
                </Cart>
        </MainBar>
     </div>
        );
    }
}

export default ProductPage;


