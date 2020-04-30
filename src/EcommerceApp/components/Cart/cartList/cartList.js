import React from "react";
import CartItem from "../cartItem/cartItem"



class CartList extends React.Component{
    
    renderCartList=()=>{
         return this.props.cartStore.map(item=>{
          return (
            <CartItem eachItem={item}/>
            )  
        })
        
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