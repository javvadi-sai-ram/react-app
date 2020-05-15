import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import Product from "../product/product";
import SizeFilter from "../sizeFilter/sizeFilter";
import ProductCart from "../Cart/productCart/productCart"
import {inject,observer} from "mobx-react";

/*const TotalProductList=styled.div`${tw`flex flex-wrap`}
width:80%
`;
const FilterBars=styled.div`${tw`flex`}
width:20%
`;
const MainBar=styled.div`${tw`flex`}`
const Cart=styled.div`${tw`flex w-1/12`}
width:5%`
*/
const ProductList=styled.div`${tw`flex flex-wrap`}`

@observer
class ProductLists extends React.Component{
    renderProductList=()=>{
        const {cartStore,productStore}=this.props
        return(
            this.props.list.map(item=>{
            return <Product cartStore={cartStore} key={item.productId} eachItem={item} onClickAddToCart={this.onClickAddToCart}/>;
            })
            );
    }
    
    render(){

        const {cartStore,productStore}=this.props
        return(
            <ProductList>
            {this.renderProductList()}
            </ProductList>
            );
    }
}


export default ProductLists