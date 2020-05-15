import React from "react";
import CartItem from "../cartItem/cartItem"
import {observer} from "mobx-react";


class CartList extends React.Component{
    
    renderCartList=()=>{
         return this.props.cartStore.map(item=>{
          return (
            <CartItem eachItem={item} cartStore={this.props.list}/>
            );
        });
        
    }
    
    render(){
        return(
            <div>
            {this.renderCartList()}
            </div>
            );
    }
}



export default CartList;