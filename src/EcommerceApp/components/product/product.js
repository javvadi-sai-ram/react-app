import React from "react";
import {inject,observer} from "mobx-react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {EachShoppingItem,Image,Title,Price,Installments,EachIte,AddToCarts,FreeShipping} from "./styledComponent.js"
      
//@inject('cartStore')
@observer
class Product extends React.Component{
    onClickAddToCart=()=>{
          toast.warn('👍 Product Added To Your Cart')
        const {eachItem}=this.props;
        this.props.cartStore.onClickAddToCart(eachItem);
    }
    
    renderEachShoppingProduct=()=>{
        const {eachItem}=this.props;
        let installmentAmount=(eachItem.price/eachItem.installmentsCount).toFixed(2);
        return(
        <EachShoppingItem>
        <div>
        {eachItem.isFreeShipping?<FreeShipping>Free Shipping</FreeShipping>:null}
           <Image src={eachItem.imageURL}/>
           
          </div>
           <Title>{eachItem.title}</Title>
           <Price><span>{eachItem.currencyFormat}</span>{eachItem.price}</Price>
           <Installments>or {eachItem.installmentsCount} X <span>{eachItem.currencyFormat}</span> {installmentAmount}</Installments>
           <AddToCarts type="button" value="Add to cart" onClick={this.onClickAddToCart}></AddToCarts>
           <ToastContainer autoClose={5000} hideProgressBar={false} position={toast.POSITION.BOTTOM_CENTER}/>
        </EachShoppingItem>
        );
    }
    
    render(){
        return(
            <EachIte>
               {this.renderEachShoppingProduct()}
            </EachIte>
            );
    }
}

export default Product;


