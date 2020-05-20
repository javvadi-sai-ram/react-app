import React from "react";
import ProductSort from "../productsort";

import {observer} from "mobx-react";
import {withRouter,Redirect} from "react-router-dom";
import authStore from "../../../Authentication/stores";

import {Headers,SignOut} from "./styledComponent.js";


@observer
class Header extends React.Component{
    
    ProductSortSize=(event)=>{
        this.props.productStore.onChangeSortBy(event.target.value);
    }
    
    signOutPage=()=>{
        authStore.userSignOut()
        const {history}=this.props;
        this.props.productStore.init()
        history.replace({pathname:("/SignIn")});
        /*return(
            <Redirect to={{
            pathname:"/SignIn"
            }}/>
            )*/
    }
    renderHeader=()=>{
        const {cartStore}=this.props
        return(
            <ProductSort ProductSortSize={this.ProductSortSize} cartStore={cartStore}/>
            );
    }
    render(){
        const {productStore}=this.props
        return (
        <div>
            <div>
                 <SignOut onClick={this.signOutPage}>SignOut</SignOut>
            </div>
            <Headers>
                 <div>products {productStore.sortedAndFilteredProducts.length} found </div>
            <div>
                 {this.renderHeader()}
            </div>
            </Headers>
        </div>
            );
        }
}


export default withRouter(Header);