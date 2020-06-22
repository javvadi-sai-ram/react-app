import React from "react";
import {observer,inject} from "mobx-react";
import ProductLists from "../productList/productList";
import Header from "../Header";
import CookieConsent, { Cookies } from "react-cookie-consent";
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";
import Paginations from "../../Pagination"



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
                                  apiStatus={this.props.getPMPAPIStatus}
                                   apiError={this.props.getPMPAPIError}
                                    onRetryClick={this.props.doNetWorkCalls}
                                      renderSuccessUI={this.renderUserList}/>
                </TotalProductList>
                <Cart> 
                        <ProductCart cartStore={cartStore}/>
                </Cart>
                <CookieConsent
                            location="bottom"
                             buttonText="Sure man!!"
                             cookieName="myAwesomeCookieName2"
                            style={{ background: "#2B373B" }}
                             buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                            expires={150}
                                >
                             This website uses cookies to enhance the user experience.{" "}
                            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
                </CookieConsent>
        </MainBar>
        <Paginations/>
     </div>
        );
    }
}

export default ProductPage;


