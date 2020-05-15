import React from "react";
import {observable,action} from "mobx";
import {observer,inject} from "mobx-react";
import {FiShoppingCart} from "react-icons/fi";

import SubTotal from "../../subtotal";
import CartList from "../cartList/cartList";
import {CartButton,Cart,SlideBar,SlideCloseButton,TotalCarList,SubTotalDiv,CloseButton,Carttext,CartPhoto,CartItemsList,CartItemsList2} from "./styledComponent.js";

//@inject('cartStore')
@observer
class ProductCart extends React.Component{
    @observable shouldDisplayCart;
    
    constructor(){
        super();
        this.initial();
    }
    @action.bound    
    initial(){
        this.shouldDisplayCart=false;
    }
    
    @action.bound
    SideBar(){
        this.shouldDisplayCart=true
    }
    
    
    render(){
        const {cartStore}=this.props;
        return(
            <div>
            {this.shouldDisplayCart?
                <SlideBar >
                       <CloseButton>
                                  <SlideCloseButton onClick={this.initial}>X</SlideCloseButton>
                      </CloseButton>
                  
                       <CartPhoto>
                               <FiShoppingCart size={48}/>
                               <CartItemsList2>{cartStore.noOfProductsInCart}</CartItemsList2>
                               <Carttext>Cart</Carttext>
                       </CartPhoto>
                    
                      <TotalCarList>
                                  <CartList cartStore={cartStore} list={cartStore} cartStore={cartStore.cartProductList}/>
                       </TotalCarList>
                        <SubTotalDiv>
                                <SubTotal cartStore={cartStore} cartStoreAmount={cartStore.totalCartAmount}/>
                        </SubTotalDiv>
                  
                      
                </SlideBar>
            :
            <Cart>
                  <CartButton onClick={this.SideBar}>{<FiShoppingCart size={48}/>}</CartButton>
                  <CartItemsList>{cartStore.noOfProductsInCart}</CartItemsList>
            </Cart>}
            </div>
            );
    }
}


export default ProductCart;