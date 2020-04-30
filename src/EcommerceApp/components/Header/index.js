import React from "react";
import ProductSort from "../productsort";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import {clearUserSession} from "../../utils/StorageUtils.js";
import {withRouter} from "react-router-dom"

const Headers=styled.div`${tw`flex justify-around mt-4 mb-6`}`;
const SignOut=styled.button`${tw`border border-black bg-black text-white text-sm ml-2 p-2 rounded mt-4`}`


class Header extends React.Component{
    
    ProductSortSize=(event)=>{
        this.props.productStore.onChangeSortBy(event.target.value)
    }
    
    signOutPage=()=>{
        clearUserSession();
        const {history}=this.props;
        history.replace({pathname:("/SignInForm")});
    }
    renderHeader=()=>{
        return(
            <ProductSort ProductSortSize={this.ProductSortSize}/>
            );
    }
    render(){
        const productCount=this.props.list;
        return (
        <div>
            <div>
                 <SignOut onClick={this.signOutPage}>SignOut</SignOut>
            </div>
            <Headers>
                 <div>products {productCount.length} found </div>
            <div>
                 {this.renderHeader()}
            </div>
            </Headers>
        </div>
            );
        }
}


export default withRouter(Header);