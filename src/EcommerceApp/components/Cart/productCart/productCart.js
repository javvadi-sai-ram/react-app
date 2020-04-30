import React from "react";
import {observable,action} from "mobx";
import {observer,inject} from "mobx-react";
import {FiShoppingCart} from "react-icons/fi";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import SubTotal from "../../subtotal";
import CartList from "../cartList/cartList";


const CartButton=styled.button`${tw`flex bg-gray-800 relative text-white fixed p-3 right-0 top-0 mt-2`}`;
const Cart=styled.div`${tw``}`;
const SlideBar=styled.div`${tw`absolute w-2/5 fixed bg-gray-800 right-0 top-0 h-screen text-white`}
`;
const SlideCloseButton=styled.div`${tw`p-2 bg-gray-800 w-16 text-white -ml-16 top-0 flex justify-center`}
`;
const TotalCarList=styled.div`${tw`overflow-auto h-64`}
`;
const SubTotalDiv=styled.div`${tw`p-4`}
`;
const CloseButton=styled.div`${tw``}
`;
const Carttext=styled.span`${tw`text-2xl font-semibold inline self-center`}`;
const CartPhoto=styled.div`${tw`flex justify-center m-2 relative`}`;
const CartItemsList=styled.div`${tw`flex text-center text-yellow-800 text-xs absolute fixed mt-8 top-0`}
margin-left:10px
`;
const CartItemsList2=styled.div`${tw`flex text-center text-yellow-800 text-xm absolute mt-2 -ml-5`}
`;

@inject('cartStore')
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
                                  <CartList cartStore={cartStore.cartProductList}/>
                       </TotalCarList>
                        <SubTotalDiv>
                                <SubTotal cartStoreAmount={cartStore.totalCartAmount}/>
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