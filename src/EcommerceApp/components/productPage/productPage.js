import React from "react";
import {observer,inject} from "mobx-react";
import ProductLists from "../productList/productList";
import Header from "../Header";
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";

import SizeFilter from "../sizeFilter/sizeFilter";
import ProductCart from "../Cart/productCart/productCart"


import tw from "tailwind.macro";
import styled from "@emotion/styled";


const TotalProductList=styled.div`${tw`flex`}
width:80%
`;
const FilterBars=styled.div`${tw`flex`}
width:20%
`;
const MainBar=styled.div`${tw`flex`}`
const Cart=styled.div`${tw`flex w-1/12`}
width:5%`

const ProductList=styled.div`${tw``}
width:50%
`




@inject('productStore')
@observer
class ProductPage extends React.Component{
    
    componentDidMount(){
        this.doNetWorkCalls();
    }
    
    doNetWorkCalls=()=>{
        this.props.productStore.getProductList();
    }
    
    
    renderUserList=observer(()=>{
        const {productStore}=this.props
        return(
        <ProductLists list={productStore.sortedAndFilteredProducts} productStore={productStore}/>
        
            )
    })
    
    
    render(){
        const {productStore}=this.props
        return (
    <div>
            <Header list={productStore.sortedAndFilteredProducts} productStore={productStore}/>
         <MainBar>
               <FilterBars>
                        <SizeFilter productStore={productStore}/>
               </FilterBars>
               <TotalProductList>
                        <LoadingWrapperWithFailure
                                  apiStatus={productStore.getProductListAPIStatus}
                                   apiError={productStore.getProductListAPIError}
                                    onRetryClick={this.doNetWorkCalls}
                                      renderSuccessUI={this.renderUserList}/>
                </TotalProductList>
                <Cart> 
                        <ProductCart/>
                </Cart>
        </MainBar>
     </div>
        )
    }
}

export default ProductPage;


